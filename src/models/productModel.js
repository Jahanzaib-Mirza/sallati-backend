const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    Type : String,
    Name:String
},{strict:false})
const Product = new mongoose.model("product",productSchema);
module.exports = Product;