const mongoose = require("mongoose");
require('mongoose-double')(mongoose);

function getProductModel() {
    // Check if the model already exists
    if (mongoose.models.ProductSchema) {
      return mongoose.model('ProductSchema');
    }
  
    // If the model does not exist, create it
    const ProductSchema = new mongoose.Schema({
        product_name:{
            type:String,
            unique:[true,"Product already added"],
            required:[true,"Please add Product name"]
        },
        category_id:{
            type:String,
            required:[true,"Please add category id"]
        },
        sub_category_id:{
            type:String,
            required:[true,"Please add sub category id"]
        },
        mrp:{
            type:SchemaTypes.Double,
            required:[true,"Please add mrp"]
        },
        selling_price:{
            type:SchemaTypes.Double,
            required:[true,"Please add selling price"]
        },
        best_seller:{
            type:Boolean,
            default:false
        },
        offer_product:{
            type:Boolean,
            default:false
        },
        active_status:{
            type:Boolean,
            default:false
        },
        bender_id:{
            type:String,
            default:1
        }
    });
  
    return mongoose.model('products', ProductSchema,{ collection: 'products' });
}


module.exports = getProductModel();