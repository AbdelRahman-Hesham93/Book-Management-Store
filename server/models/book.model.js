const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema({
  Book: String,
  Author: String,
  Price: Number,
});

module.exports = mongoose.model("Books", bookSchema); 
