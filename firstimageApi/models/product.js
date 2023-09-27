const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
 
    productname :{
        type:String,
        require:true
    },
    productdetails :{
        type:String,
        require:true
    },
    productprice :{
        type:String,
        require:true
    },
    image:{
        type : String,
        require:true
    }


})

const product = new mongoose.model("product",Schema)
module.exports = product;