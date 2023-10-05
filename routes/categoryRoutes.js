const express = require('express')
const router  = express.Router();
const {getCategories,createCategory, updateCategory, deleteCategory}  = require("../controllers/CategoryController");

router.post("/", createCategory);
router.get("/",getCategories);

router.put("/:id",updateCategory);
router.delete("/:id",deleteCategory);

module.exports = router;

