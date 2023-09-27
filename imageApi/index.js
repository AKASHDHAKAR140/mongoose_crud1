const express =require("express")
require("./db/connection")
const models = require("./models/imageschema")
const router = require("./routers/index")

const app = express()

app.use(express.json())
app.use(router)

app.listen(3086,(req,res)=>{
    console.log("server is running on port 3086")
})
