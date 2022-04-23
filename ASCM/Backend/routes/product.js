const express = require('express')
const router = express.Router()
const Product = require('../models/product')


//get all products
router.get("/", async (req, res, next) => {
    try{
        const response = await Product.find({});
        if(!response) return res.status(200).json({msg: "No Product found!"});
        res.status(200).json(response);
        res.send(response);
    }catch(error){
        console.log(error.message || error.code);
    }
  
}); 
router.post("/search", async (req, res, next) => {
    var {search} = req.body;
    try{
        const response = await Product.find({
            "owner":search
        });
        if(!response) return res.status(200).json({msg: "No Product found!"});
        res.status(200).json(response);
        res.send(response);
    }catch(error){
        console.log(error.message || error.code);
    }
  
});



module.exports = router