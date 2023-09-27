 const express = require("express")
 require("./db/connection")
 const router= require("./services")
 const todolist = require("./models/collection")
const cors = require("cors")
 const app = express()
 const port = process.env.PORT || 3081
 app.use(cors());
 app.use(express.json());
 app.use(router)

 app.listen(port,()=>{
    console.log(`server listing in this port ${port}`)
 })