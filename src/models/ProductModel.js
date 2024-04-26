const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
   
    titel: { type: String},
    price: { type: Number},                    
    image: { type: String},
    category: { type: String},
    description: { type: String},
    productCode: { type: String},
    createDate: {type: Date, default: Date.now}
    
},
{versionKey: false}

)


const productModel = mongoose.model("product", productSchema);
module.exports = productModel;