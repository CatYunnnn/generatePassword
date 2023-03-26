const express = require("express");
const exphbs = require("express-handlebars");
const password = require("./generator_password");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  const options = req.body;
  console.log("random password is :", password(req.body));
  const num = password(req.body);
  res.render("index", { password: num, options: options });
});
app.listen(port, () => {
  console.log("express is running running~~~");
});
