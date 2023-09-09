const Category = require("../models/categoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res.send(error);
  }
};

const postCategory = async (req, res) => {
  try {
    console.log(req.body);
    const { name, src, subCategories } = req.body;
    const category = new Category({ name, src, subCategories });
    const response = await category.save();
    res.status(200).send(response);
  } catch (error) {
    res.send(error);
  }
};

const postCategories = (req, res) => {
  console.log(req.body);
  Category.insertMany(req.body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = { getCategories, postCategory, postCategories };
