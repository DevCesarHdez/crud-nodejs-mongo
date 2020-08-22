const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TareaSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("taks", TareaSchema);
