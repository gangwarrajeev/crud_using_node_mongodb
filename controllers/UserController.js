//@desc Get All Users
//@route GET /api/users
//@access public
const asyncHandler = require('express-async-handler');
const UserModel = require("../models/User")
const getUsers = asyncHandler(async (req, res) => {

    const UserData = await UserModel.find();
    res.status(200).json(UserData);
});

const getUserDetails = asyncHandler(async (req,res) => {
    console.log('id is ',req.params.id)
    const UserData = await UserModel.findById(req.params.id);
    if(!UserData){
        res.status(404);
        throw new Error("User Not found!");
    }
    let response = {"status":"User Data found","status_code":200,"mssg":"User  Data found","userData":UserData}
    res.status(200).json(response)
});

const updateUserDetails = asyncHandler(async (req,res) => {
    const userData = await UserModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if(!userData){
        res.status(404);
        throw new Error("User Not Found")
    }
    let response = {"status":"Success","status_code":200,"mssg":"User Data Updatedd","userData":userData}
    res.status(200).json(response)
});

const deleteUser = asyncHandler(async (req,res) => {
    const user = await UserModel.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User Not found!");
    }
    await user.deleteOne();
    let response = {"status":"User Deleted","status_code":200,"mssg":"User Deleted","deleted_user":user}
    res.status(200).json(response)
});


const createUser = asyncHandler(async (req,res) => {
    console.log(('req',req.body))
    const {user_name,email,mobile_number,education,city,salary} = req.body;
    if(!user_name || !email || !mobile_number || !education || !city || !salary){
        res.status(400)
        throw new Error('All fields are mandotary');
    }
    const user = await UserModel.create({
        user_name,
        email,
        mobile_number,
        education,
        city,
        salary
       
    });
    let response = {"status":"Success","status_code":200,"mssg":"User Created","data":user}
    res.status(200).json(response)
});

module.exports = { getUsers,getUserDetails,updateUserDetails,deleteUser,createUser };

