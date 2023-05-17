const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, index: true },
  email: { type: String, index: true },
  // Other fields
});

const User = mongoose.model("User", userSchema);
