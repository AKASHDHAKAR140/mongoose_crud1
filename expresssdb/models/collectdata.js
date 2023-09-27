const mongoose= require("mongoose")


const Schema = new mongoose.Schema({

    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:Number,
        require:true,
        trim:true
    }

})

const login = new mongoose.model("login",Schema)
module.exports = login;