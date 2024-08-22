import { sleep } from "crawlee";
import _ from "lodash";

export async function processListInChunks<T, U>(
  list: T[],
  processChunk: (chunk: T[]) => Promise<U>,
  chunkSize: number,
  msWaitBetweenBatches: number
): Promise<U[]> {
  // Break the list into chunks, so we can run a computation on N items
  // at a time.
  const chunks: T[][] = _.chunk(list, chunkSize);

  // Build up a list of U's from processing each chunk
  const results: U[] = [];
  for (const chunk of chunks) {
    // Run on this chunk
    const thisResult: U = await processChunk(chunk);
    results.push(thisResult);

    // Kill time until the next one
    await sleep(msWaitBetweenBatches);
  }

  return results;
}
