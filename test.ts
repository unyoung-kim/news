// import _ from "lodash";
// import { processListInChunks } from "./batching";
// import { NewsInformation, aiScrape, filterNews } from "./scraper";
// import { getRelevantUrlsToScrape } from "./url-retriever";

// const urls = await getRelevantUrlsToScrape(
//   "I want to get news about startups that raised recently."
// );

// console.log("urls: ", urls);

// const scrapedAnswer: Record<string, any>[] = await aiScrape(urls, [
//   "headline",
//   "excerpt",
//   "time",
//   "image",
//   "url",
// ]);

// // console.log("Scrpaed answer: ", scrapedAnswer);

// const filteredNews: NewsInformation[][] = await processListInChunks(
//   scrapedAnswer,
//   (chunk) =>
//     filterNews(
//       "I want to get news about startups getting funded or raised capital.",
//       chunk
//     ),
//   5, // Process around 7 news at a time
//   10
// );

// const flattenedNews: NewsInformation[] = _.flatten(filteredNews);

// console.log("Flattened news: ", flattenedNews);

// // const filteredNews: NewsInformation[] = await filterNews(
// //   "I want to get news about startups getting funded or raised capital.",
// //   scrapedAnswer
// // );

// console.log("Filtered news: ", filteredNews);
