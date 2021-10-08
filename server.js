const express = require("express");
// Loaded express module

const users = require("./routes/api/users/users");
const posts = require("./routes/api/Posts/posts");
const comments = require("./routes/api/comment/comments");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json);

app.get("/", (req, res) => {
  // get metode used to retrieve data
  console.log("Hello Server");
  res.json({ mgs: "Welcome to Angular" });
});

app.listen(5000, () => {
  // used to start server
  console.log("server started");
});
