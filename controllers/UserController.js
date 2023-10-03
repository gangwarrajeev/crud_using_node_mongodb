//@desc Get All Users
//@route GET /api/users
//@access public
const asyncHandler = require('express-async-handler');
const User = require("../models/User")
const getUsers = asyncHandler(async (req, res) => {

    const UserData = await User.find();
    res.status(200).json(UserData);
});

const getUserDetails = asyncHandler(async (req,res) => {
    let response = {"status":"User Data found","status_code":200,"mssg":"User  Data found"}
    res.status(200).json(response)
});

const updateUserDetails = asyncHandler(async (req,res) => {
    let response = {"status":"User Data Updated","status_code":200,"mssg":"User Updated"}
    res.status(200).json(response)
});

const deleteUser = asyncHandler(async (req,res) => {
    let response = {"status":"User Deleted","status_code":200,"mssg":"User Deleted"}
    res.status(200).json(response)
});
const createUser = asyncHandler(async (req,res) => {
    console.log(('req',req.body))
    const {user_name,email,mobile_number} = req.body;
    if(!user_name || !email || !mobile_number){
        res.status(400)
        throw new Error('All fields are mandotary');
    }
    const user = await User.create({
        user_name,
        email,
        mobile_number
    });
    let response = {"status":"User Cregated","status_code":200,"mssg":"User Cregated","data":req.body}
    res.status(200).json(user)
});

module.exports = { getUsers,getUserDetails,updateUserDetails,deleteUser,createUser };

