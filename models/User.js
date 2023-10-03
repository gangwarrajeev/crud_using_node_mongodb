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
    },
});

module.exports =  mongoose.model("users",UserSchema);