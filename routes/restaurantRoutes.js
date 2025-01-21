const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRestaurantController,
  getAllRestaurants,
  getRestaurantByIdController,
  deleteRestaurantController,
} = require("../controllers/restaurantController");

const router = express.Router();
// create restaurant
router.post("/createRes", authMiddleware, createRestaurantController);

// get all restaurant
router.get("/getAll", getAllRestaurants);

// get restaurant by id
router.get("/getById/:id", getRestaurantByIdController);

// delete restaurant
router.delete("/delete/:id", authMiddleware, deleteRestaurantController);

module.exports = router;
