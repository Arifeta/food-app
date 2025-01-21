const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

// create category
router.post("/create", authMiddleware, createCategoryController);

// get all categories
router.get("/getAllCat", getAllCategoriesController);

// update category
router.put("/update/:id", authMiddleware, updateCategoryController);

// delete category
router.delete("/delete/:id", authMiddleware, deleteCategoryController);
module.exports = router;
