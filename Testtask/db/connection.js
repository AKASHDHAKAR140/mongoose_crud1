const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/taskdata")
.then(()=>console.log("succesfully connected"))
.catch((err)=>console.log("failed  to connectivity from mongodb"))