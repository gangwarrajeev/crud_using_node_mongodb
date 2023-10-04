const express = require('express')
const router  = express.Router();
const {getCategories,createCategory}  = require("../controllers/CategoryController");


router.post("/", createCategory);
router.get("/",getCategories);

router.get("/:id", (req, res) =>  {
    res.json({mssg:'category fetched categories'});
});
router.get("/", (req, res) =>  {
    res.json({mssg:'all categories'});
});

module.exports = router;

