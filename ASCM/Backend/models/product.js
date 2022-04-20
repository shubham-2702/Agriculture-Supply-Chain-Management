const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    price:{
        type:String,
    },
    quantity:{
        type:String,
    },
    owner:{
        type:String,
    }
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
