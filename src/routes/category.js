const express = require("express");
const { getCategories, postCategory, postCategories } = require("../controllers/category");


const router = express.Router();

router.route("/").get(getCategories);
router.route("/").post(postCategory)


module.exports = router;