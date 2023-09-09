const mongoose = require("mongoose");
const SubCategory = require("./subCategoryModel");


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    src:{
        type:String,
        required : true
    },
    subCategories:{
        type:[SubCategory.schema],
        default:undefined
    }
})

const Category = new mongoose.model("Category",categorySchema);
module.exports = Category;