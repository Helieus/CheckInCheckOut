const express = require("express");
const path = require("path");

const app = express();
const PORT = 1000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
  res.render("login");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
