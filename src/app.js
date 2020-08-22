const express = require("express");
const morgan = require("morgan");

const app = express();

//conectting to db

//importing routes

//Settings
app.set("port", process.env.PORT || 8080);

//middlewares
app.use(morgan("dev"));

//Routes

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
