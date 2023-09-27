const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/rest-api")
.then((res)=>{
    console.log("succesfully connection")
})
.catch((err)=>{
    console.log("faited connection")
})