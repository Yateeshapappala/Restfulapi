const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_fname: { type: String, required: true },
  user_lname: { type: String, required: true },
  user_id: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
