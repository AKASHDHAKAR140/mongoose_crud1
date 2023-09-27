const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    username:{
        type:String,
        require:true

    },
    email:{
     type:String,
     require:true
    },
    password:{
        type:String,
        require:true
    }
})

const todolist = new mongoose.model("todolist",Schema)

module.exports= todolist;