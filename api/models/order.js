const mongoose = require("mongoose");
const orderShema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Order", orderShema);
