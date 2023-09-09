const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};
const getUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.find({ _id });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

//Delete user
const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.deleteOne({ _id });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.updateOne({ _id }, { $set: req.body });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

// Create user
const registerUser = async (req, res) => {
  try {
    // console.log(req.body);
    const password = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: password,
    });
    const response = await user.save();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, registerUser, getUser, deleteUser, updateUser };
