const mongoose = require("mongoose");

function getCategoryModel() {
    if (mongoose.models.ProductSchema) {
        return mongoose.model('CategorySchema');
    }
    const CategorySchema =  mongoose.Schema({
        category_name:{
            type:String,
            unique:[true,"Category already added"],
            required:[true,"Category name is required"]
        },
        category_slug:{
            type:String,
            default:''
        },
        active_status:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }, { collection: 'User' });
    return mongoose.model('categories', CategorySchema);
}

module.exports  =  getCategoryModel();