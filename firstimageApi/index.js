const express = require("express")
require("./db/connection")
const product = require("./models/product")
const  router = require("./services/index")
const port = process.env.PORT|| 3085
const app = express()


app.use(express.json())
app.use(router)

app.listen(port,(req,res)=>{
    console.log(` server runing on port ${port}`)
})