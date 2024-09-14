import _ from "lodash";
import { getRelevantUrlsToScrape } from "../../url-retriever";
import { processListInChunks } from "./lib/batch/batching";
import { NewsInformation, aiScrape, filterNews } from "./scraper";

/**
 * End to end function
 */
export async function getNewsFromQuery(
  query: string
): Promise<NewsInformation[]> {
  const urls: string[] = await getRelevantUrlsToScrape(query);

  console.log("Urls selected to scrape: ", urls);

  const scrapedAnswer: Record<string, any>[] = await aiScrape(urls, [
    "headline",
    "excerpt",
    "time",
    "image",
    "url",
  ]);

  console.log("Scrpaed answer: ", scrapedAnswer);

  const filteredNews: NewsInformation[][] = await processListInChunks(
    scrapedAnswer,
    (chunk) => filterNews(query, chunk),
    10,
    10
  );

  console.log("Filtered News: ", filteredNews);

  const flattenedNews: NewsInformation[] = _.flatten(filteredNews);

  return flattenedNews;
}
