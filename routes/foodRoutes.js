const express = require("express");

const {
  createFoodController,
  getFoodController,
  getFoodByIdController,
  getFoodRestaurantIdController,
  updateFoodController,
  deleteFoodController,
  orderStatusController,
  placeOrderController,
} = require("../controllers/foodController");

// middleware
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router = express.Router();
// // create food
router.post("/createFood", authMiddleware, createFoodController);

// get all food
router.get("/getFood", authMiddleware, getFoodController);

// get a single food
router.get("/get/:id", authMiddleware, getFoodByIdController);

// get based of restaurant
router.get("/getByRestaurant/:id", getFoodRestaurantIdController);

// update food
router.put("/updateFood/:id", authMiddleware, updateFoodController);
// delete food
router.delete("/deleteFood/:id", authMiddleware, deleteFoodController);

// place order
router.post("/placeOrder", authMiddleware, placeOrderController);

// // order status
router.post(
  "/orderstatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);
module.exports = router;
