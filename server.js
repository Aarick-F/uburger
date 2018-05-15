require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

const app = express();

const PORT = process.env.PORT;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  }
  console.log("App listening on port: " + PORT);
});

