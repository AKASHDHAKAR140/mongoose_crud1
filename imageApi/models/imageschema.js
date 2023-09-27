const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

const userImage = new mongoose.model("userImage",Schema)

module.exports = userImage;