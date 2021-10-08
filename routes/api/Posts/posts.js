const express = require("express");

const routes = express.Router();

routes.get("/test", (req, res) => {
  res.json({ mgs: "Hello From Comment" });
});

module.exports = routes;
