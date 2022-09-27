const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String },
  location:{type:String},
  status:{type:String}
  });

module.exports = mongoose.model("userInfo", userSchema);
