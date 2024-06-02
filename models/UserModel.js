const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: string,
  email: string,
});

module.exports = mongoose.model("User", userSchema);
