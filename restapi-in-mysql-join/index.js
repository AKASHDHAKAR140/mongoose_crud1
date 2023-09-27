const express =  require("express")
const db = require("./db")
const app = express()
const bodyPaser = require("body-parser")
//const router = require("./modules/book/book.controller")
// const router = require("./modules/review/review.controller")

app.use(bodyPaser.json())
app.use(require("./routers"))

app.listen(3001,(req,res)=>{
    console.log("server listening port no 3000")
})