const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new schema({
  FirstName: String,
  LastName: String,
  Email: String,
  age: Number,
  role: String,
  Password: String,
});

userSchema.methods.comparePassword = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

module.exports = mongoose.model("users", userSchema);
