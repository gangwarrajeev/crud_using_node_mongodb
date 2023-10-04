const asyncHandler = require('express-async-handler');
const CategoryModel = require("../models/Category")

//create category
const createCategory = asyncHandler(async (req, res) => {
    console.table(req.body)
    let  {category_name, active_status} = req.body;
    if(!category_name){
        res.status(400);
        throw new Error("Please Fill the all fields");
    }
    category_name = category_name.trim();
    let category_slug  = category_name.toLowerCase();
    category_slug = category_slug.replace(" ","-")
    const category = await CategoryModel.create({
        category_name,
        category_slug,
        active_status
    });
    res.status(201).json({mssg:"Category Created",status:"success",category_data:category});
});

//get all categories data
const getCategories = asyncHandler(async (req, res) => {
    const categoriesData = await Category.find({});
    res.status(200).json({mssg:"Categories Data",status:"success",categories_data:categoriesData});
    
});







module.exports = {getCategories, createCategory};