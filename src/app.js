const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//conectting to db

//importing routes

//Settings
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extends: false }));

//Routes

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
