const express = require("express");
const {
  getUserController,
  updateUserController,
  resetPasswordController,
  updatePasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getUser", authMiddleware, getUserController);

// update user data
router.put("/updateUser", authMiddleware, updateUserController);

// password update
router.post("/updatePassword", authMiddleware, updatePasswordController);

// reset password
router.post("/resetPassword", authMiddleware, resetPasswordController);

// delete user
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);
module.exports = router;
