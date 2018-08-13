const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("videos");
});

app.get("/videos", (req, res) => {
  res.send("index ");
});

app.get("/videos/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/videos", (req, res) => {
  res.send("post");
});

app.get("/videos/:id", (req, res) => {
  res.send("show ");
});

app.get("/videos/:id/edit", (req, res) => {
  res.send("edit");
});

app.put("/videos/:id", (req, res) => {
  res.send("update");
});

app.delete("/videos/:id", (req, res) => {
  res.send("delete");
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
