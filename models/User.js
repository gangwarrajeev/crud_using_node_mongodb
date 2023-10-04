const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:[true,"Please add the contact name"]
    },
    email: {
        type:String,
    },
    mobile_number: {
        type:String,
        required:[true,"Please enter your mobile no"]
    },
    education:{
        type:String,
        required:[true,"Please enter your education"]
    },
    city:{
        type:String,
        required:[true,"Please enter your city"]
    },
    salary:{
        type:String,
        required:[true,"Please enter your salary"]
    },
},
{
    timestamps:true
});

module.exports =  mongoose.model("users",UserSchema);