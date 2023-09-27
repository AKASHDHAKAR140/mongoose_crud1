const mongoose = require("mongoose")

mongoose.set("strictQuery",true)
mongoose.connect("mongodb://127.0.0.1:27017/collectdata")
.then(()=>{console.log("successfully connected")})
.catch((err)=>{console.log("failed to connectivity from mongodb ")})