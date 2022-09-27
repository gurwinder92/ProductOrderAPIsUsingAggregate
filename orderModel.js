const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: String },
  productName:{type:String},
  Location: { type: String },
  amount: {type:Number}
});

module.exports = mongoose.model("userOrder", orderSchema);
 