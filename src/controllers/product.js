const Product = require("../models/productModel")

const getProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).send(products);
    } catch (error) {
        res.send(500).send(error)
    }
}

module.exports = {getProducts}