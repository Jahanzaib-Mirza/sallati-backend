const express = require("express");
const { getUsers, getUser, registerUser, deleteUser, updateUser } = require("../controllers/user");
const router = express.Router();

//get All users
router.route("/").get(getUsers);
//get Single User
router.route("/:id").get(getUser);
//REgister User
router.route("/").post(registerUser);
router.route("/:id").delete(deleteUser);
router.route("/:id").put(updateUser);


module.exports = router;