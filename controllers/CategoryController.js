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
    if(category_slug.includes(" ")){
        category_slug = category_slug.replace(" ","-")
    }
    
    const category = await CategoryModel.create({
        category_name,
        category_slug,
        active_status
    });
    res.status(201).json({mssg:"Category Created",status:"success",category_data:category});
});

//get all categories data
const getCategories = asyncHandler(async (req, res) => {
    const categoriesData = await CategoryModel.find({});
    res.status(200).json({mssg:"Categories Data",status:"success",categories_data:categoriesData});
    
});

// update category data
const updateCategory = asyncHandler( async (req, res ) => {
    const category = await CategoryModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if(!category){
        res.status(404);
        throw new Error("Categoy Not Found");
    }
    res.status(200).json({mssg:"Category Data Updated",status:"Success",categoryData:category});
});

// delete category data

const deleteCategory = asyncHandler( async (req, res  ) => {
    const category = await CategoryModel.findById(req.params.id);
    if(!category){
        res.status(404);
        throw new Error("Category Not Found");
    }

    category.deleteOne();
    res.status(200).json({mssg:"Category Deleted Successfully!",status:"Success",category_data:category});
});







module.exports = {getCategories, createCategory, updateCategory, deleteCategory};