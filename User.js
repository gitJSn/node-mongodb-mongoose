const { Schema, default: mongoose } = require("mongoose");

const UserScheme = new Schema({
  name: String,
});

module.exports = mongoose.model("User", UserScheme);
