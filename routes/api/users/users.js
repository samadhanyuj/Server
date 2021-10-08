const express = require("express");

const routes = express.Router();

routes.get("/test", (req, res) => {
  res.json({ mgs: "Hello From json" });
});

routes.post("/register", (req, res) => {
  res.json(req.body);
});

module.exports = routes;
