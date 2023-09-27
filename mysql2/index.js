const express = require("express")
const bodyParser = require("body-parser")
const router = require("./modules/user.controller")
const app  = express();
app.use(bodyParser.json())
app.use(router)

app.get("/",(req,res)=>{
    res.send("server running")
})
app.listen(2000,(req,res)=>{
    console.log("server listening port on 2000")
})