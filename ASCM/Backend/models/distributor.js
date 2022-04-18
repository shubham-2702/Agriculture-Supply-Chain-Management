const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DistributorSchema = new Schema({

    name:{
        type:String,
    },
    email:{
        type:String,
    },
    contactNumber:{
        type:String,
    },
    addrress:{
        type:String,
    },
    password:{
        type:String,
    },
    products:{
        type:Array,
    }
})

const Distributor = mongoose.model('distributor', DistributorSchema);

module.exports = Distributor;
