const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/user-description")
    .then((res) => {
        console.log("connecting succesfully")
    
    }).catch((err)=>{
        console.log("failed connection")
    })
   



