// server/index.js

const config = require("./config");

const express = require("express");
const loaders = require("./loaders/sqlite");

var cors = require("cors");
const User = require("./model");




const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  

  loaders.sqlite

  // Find all users
  const users = User.findAll();
  //console.log(users.every(user => user instanceof User)); // true
  //console.log(users);
  console.log("All users:", JSON.stringify(users, null, 2));
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
