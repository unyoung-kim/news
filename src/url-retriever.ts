import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { DynamicTool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";

/**
 * Define your chat model to use.
 */
export const GPT35_TURBO = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  temperature: 0,
  apiKey: process.env.OPENAI_APIKEY,
});

export const GPT4 = new ChatOpenAI({
  model: "gpt-4",
  temperature: 0,
  apiKey: process.env.OPENAI_APIKEY,
});

const customTool = new DynamicTool({
  name: "get_word_length",
  description: "Returns the length of a word.",
  func: async (input: string) => input.length.toString(),
});

/** Define your list of tools. */
const tools = [customTool];

export interface NewsSource {
  name: string;
  description: string;
  url: string;
  path: string;
  categories: string[];
}

const sources: NewsSource[] = [
  {
    name: "TechCrunch",
    description: "TechCrunch is a tech news website.",
    url: "https://techcrunch.com",
    path: "category",
    categories: [
      "startups",
      "venture",
      "apple",
      "security",
      "artificial-intelligence",
      "apps",
    ],
  },
  {
    name: "Wired",
    description: "Wired is a news website.",
    url: "https://www.wired.com",
    path: "category",
    categories: [
      "security",
      "politics",
      "gear",
      "big-story",
      "business",
      "science",
      "culture",
      "ideas",
    ],
  },
  {
    name: "CNBC",
    description: "CNBC is a tech news website.",
    url: "https://www.cnbc.com",
    path: "",
    categories: [
      "technology",
      "cybersecurity",
      "internet",
      "social-media",
      "tech-guide",
      "health-and-science",
      "fintech",
    ],
  },
  {
    name: "Venture Beat",
    description: "CNBC is a tech news website.",
    url: "https://venturebeat.com",
    path: "category",
    categories: [
      "ai",
      "security",
      "data-infrastructure",
      "automation",
      "enterprise-analytics",
      "health-and-science",
      "fintech",
    ],
  },
];

const schema = z.object({
  urls: z.array(z.string()),
});

type SchemaType = z.infer<typeof schema>;

export async function getRelevantUrlsToScrape(
  query: string
): Promise<string[]> {
  const availableUrls = constructUrlList();

  // 1. Extract keywords from the query
  // 2. Use the keywords and the query to find relevant sources.

  const parser = StructuredOutputParser.fromZodSchema(schema);

  const keywordExtractionPrompt = PromptTemplate.fromTemplate(
    `Given this user query, extract keywords: {query}. Only return the keywords, do not return anything else.`
  );

  const urlRetrievalPrompt =
    PromptTemplate.fromTemplate(`You are an expert in retrieving relevant news sources and URLs.\n
      Given the user query: {query} and the keywords that I extracted from the user query: {keywords}, return
      all the URLs from the provided urls that could be potential sources to find the type of news that the user wants. Only return the URLs, do not return anything else.
      
      available urls: {urls}.
      
      \n {format_instructions}`);

  const chain = keywordExtractionPrompt.pipe(GPT35_TURBO);

  const combinedChain = RunnableSequence.from([
    {
      keywords: chain,
      query: (input) => input.query,
      urls: (input) => input.urls,
      format_instructions: (input) => input.format_instructions,
    },
    urlRetrievalPrompt,
    GPT35_TURBO,
    parser,
  ]);

  const result: SchemaType = await combinedChain.invoke({
    query: query,
    urls: availableUrls.join(", "),
    format_instructions: parser.getFormatInstructions(),
  });

  return result.urls;
}

export function constructUrlList(): string[] {
  const urlListPerSource: string[][] = sources.map((source: NewsSource) => {
    return source.categories.map((category: string) => {
      return `${source.url}/${source.path}/${category}/`;
    });
  });

  return urlListPerSource.flat();
}
