const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    address:String,
    paymentMehod:String,
    subTotal:String

})

const Order = new mongoose.model("order",orderSchema);
module.exports = Order