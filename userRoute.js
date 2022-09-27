const express = require("express");
const user = require("../services/userServices");
const router = express.Router();

router.post("/Customer", user.Customer);
router.post("/createOrder", user.createOrder);
router.get("/getAllOrder", user.getAllOrder);
router.get("/totalAmount", user.totalAmount)

module.exports = router;
