import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";

import { MultiOnClient } from "multion";
import { RetrieveOutput } from "multion/api";
import { GPT4 } from "./url-retriever";

const multion = new MultiOnClient({
  apiKey: "9eb7469897ae4c59bbc3a5b5545cad8a",
});

// Given a list of urls, scrape and get an array of news sources
export async function aiScrape(
  urls: string[],
  extractionFields: string[]
): Promise<Record<string, any>[]> {
  try {
    const data: Record<string, any>[] = await Promise.all(
      urls.map(async (url) => {
        const retrieveResponse: RetrieveOutput = await multion.retrieve({
          cmd: `Get all news on this page. Make sure that non-relevant data is not returned and you only return data that has all the relevant fields. Only get news that are less than 5 days old. Today's date is ${new Date().toISOString()}`,
          url,
          fields: extractionFields,
        });

        // Multion scraping is not perfect - it will sometimes return things that are not relevant.
        // One way to filter this is by removing the data if some of the extraction fields are not there.
        // Excerpt is optional
        const filteredResponse: Record<string, any> =
          retrieveResponse.data.filter((data) =>
            extractionFields.every((field) => field in data)
          );

        return filteredResponse;
      })
    );

    return data.flat();
  } catch (e) {
    console.log("Error scraping data: ", e);
    return [];
  }
}

export const NewsInformationSchema = z.object({
  headline: z.string(),
  excerpt: z.string(),
  time: z.string(),
  image: z.string(),
  url: z.string(),
  sources: z.array(z.string()).nullish(),
});
export type NewsInformation = z.infer<typeof NewsInformationSchema>;

// Some news might be redundant.
// Take in user query with keywords and filter out news that are not relevant.
// Then some news might be redundant. Accumulate sources for these and come up with a common data.
export async function filterNews(
  query: string,
  data: Record<string, any>[]
): Promise<NewsInformation[]> {
  if (data.length === 0) {
    return [];
  }
  // First of all, filter all the news that are not relevant.
  // Then check if there are duplicates.

  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      data: z.array(NewsInformationSchema),
    })
  );

  // TODO - add prompt so it aggregates all the sources
  const prompt = PromptTemplate.fromTemplate(
    `You are an expert in filtering out news. This is what the user typed in for their news letter preference: {query}. Filter out and only return the news that you think are relevant. Do not return anything else but the news object. If there is nothing relevant, return an empty array. \n
    
    \n
    News: {news}

    {format_instructions}.`
  );

  const chain = RunnableSequence.from([prompt, GPT4, parser]);

  const result = await chain.invoke({
    query,
    news: JSON.stringify(data),
    format_instructions: parser.getFormatInstructions(),
  });

  return result.data;
}

export async function aggregateAndSelectTopKNews(
  query: string,
  data: NewsInformation[]
) {
  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      data: z.array(NewsInformationSchema),
    })
  );

  // TODO - add prompt so it aggregates all the sources
  const prompt = PromptTemplate.fromTemplate(
    `You will be given many news article, which may include duplicate articles that don't look exactly the same but can infer that reports the same thing. 
      
      If they do, make them into one by aggregating their sources by simply addiing two url's together inside the sources field.
      \n

      Then select 10 most relevant news articles based on the user's query.

      \n

      User query: {query}
      News: {news}
  
      {format_instructions}.`
  );

  const chain = RunnableSequence.from([prompt, GPT4, parser]);

  const result = await chain.invoke({
    query: query,
    news: JSON.stringify(data),
    format_instructions: parser.getFormatInstructions(),
  });

  return result.data;
}
