const express = require('express')
const router = express.Router()
const product = require('../models/product')


router.post('/', (req, res, next) => {
  console.log(req.body)
    new product({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      owner: req.body.owners
    }).save()
      .then(() => {
        console.log(product);
        res.send("product Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  });
  
module.exports = router