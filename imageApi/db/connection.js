const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/image-api")
.then((res)=>{
    console.log("connection succesfully")
})
.catch((err)=>{
    console.log("connection failed")
})