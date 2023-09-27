const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
   title:{
     type:String,
     require:true
   },
   description:{
     type:String,
     require:true
   },
   status:{
    type:String,
     default:"0"
   }
})

const restapi = new mongoose.model("restapi",Schema)

module.exports = restapi;
