const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

const router = express.Router();

// routes
// REGISTER// POST
router.post("/register", registerController);
router.post("/login", loginController);

// exports
module.exports = router;
