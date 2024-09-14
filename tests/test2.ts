import _ from "lodash";
import { filtered } from "../src/sample";
import { aggregateAndSelectTopKNews } from "../src/scraper";

console.log("LEGNTH: ", _.flatten(filtered).length);

// console.log("LEGNTH: ", _.flatten(categorizedNews).length);

const answer = await aggregateAndSelectTopKNews(
  "I want to get news about startups getting funded or raised capital.",
  _.flatten(filtered)
);

console.log("Answer: ", answer);

console.log("Answer length: ", answer.length);
