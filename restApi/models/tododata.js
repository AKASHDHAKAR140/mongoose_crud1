const  mongoose =  require("mongoose")

const Schema = new mongoose.Schema({
    userdata :{
        type:String,
        require:true
    },
   
})

const tododata = new mongoose.model("tododata",Schema)

module.exports = tododata;