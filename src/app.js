import express from "express";
import dotenv from "dotenv";

const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;