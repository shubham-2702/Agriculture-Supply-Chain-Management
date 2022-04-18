const express = require('express')
const router = express.Router()
const distributor = require('../models/distributor')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/', (req, res, next) => {
    // console.log("Reached");
    distributor.findOne({email: req.body.email})
    .then(doc => {
      if(doc){
        if(bcrypt.compareSync(req.body.password, doc.password)){
          const token = jwt.sign({
            name: doc.name,
            email: doc.email,
            contactNumber: doc.contactNumber
          }, 'SECRET_KEY')

          res.status(200).json({token})
        }else{
          res.status(400).json({err: "Wrong Credentials"})
        }
      }else{
        console.log('wrong email')
        res.status(400).json({err: "Wrong Credentials"})
      }
    }).catch(err => {
      res.status(500).json({err})
    })
})

module.exports = router