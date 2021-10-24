// server/index.js

const config = require("./config");

const express = require("express");


var cors = require("cors");



const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
