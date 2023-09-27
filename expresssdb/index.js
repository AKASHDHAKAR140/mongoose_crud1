const express = require("express")
require("./db/connection")
const login  =require("./models/collectdata")
const router = require("./service")
const cors = require("cors")
const app = express()

//const port = process.env.PORT || 3080;

app.use(express.json())
app.use(router)
app.use(cors())

app.listen(3090,()=>{
    console.log("server lestening on port 3090")
})