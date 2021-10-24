// server/index.js

const express = require("express");

var CORS = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
