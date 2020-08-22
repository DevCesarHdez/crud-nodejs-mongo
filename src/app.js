const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

//conectting to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));

//importing routes
const indexRoutes = require("./routes/index");

//Settings
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extends: false }));

//Routes
app.get("/", indexRoutes);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
