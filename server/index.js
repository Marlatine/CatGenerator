const express = require("express");
const _ = require("lodash");

const app = express();

const hostname = "localhost";
const port = process.env.PORT || 3001;

const catNames = [
  "Axle",
  "Babbles",
  "Lucy",
  "Jake",
  "Zoe",
  "Lily",
  "Penny",
  "Wallace",
  "Stella",
  "Sarah",
];

const catBreeds = [
  "Abyssinian",
  "Aegan",
  "Balinese",
  "Bombay",
  "British Shorthair",
  "Chartreux",
  "Maine Coon",
  "Pixie-bob",
];

app.get("/api", (req, res) => {
  res.json({
    name: _.sample(catNames),
    breed: _.sample(catBreeds),
  });
});

app.listen(port, hostname, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
