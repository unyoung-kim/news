import cors from "cors";
import express from "express";
import { NewsInformation } from "./scraper";
import { getNewsFromQuery } from "./src/news/news";

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // For parsing JSON bodies
app.use(cors()); // Optional: Enable CORS for all routes

// Simple API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Express server!" });
});

app.post("/api/fetch-news", async (req, res) => {
  // Get input from request body
  const query = req.body.query;

  console.log("query: ", query);
  // Process the input using your function
  const result: NewsInformation[] = await getNewsFromQuery(query);

  console.log("news: ", result);

  // Send the result back to the client
  res.json({ result: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
