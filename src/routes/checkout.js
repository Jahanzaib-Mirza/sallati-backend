const express = require("express");
const confirmCheckout = require("../controllers/checkout");

const router = express.Router();

router.route("/").post(confirmCheckout)

module.exports = router
