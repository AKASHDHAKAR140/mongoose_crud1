 const express  = require("express")
 const cronjob = require("./cron/nodecron")
//const sendMail = require("./email/sendmail")
  const app = express()
  
app.get("/",(req,res)=>{
    res.send("this is my server")
})
cronjob();
//app.get("/cron",cronjob)
  app.listen(3000,()=>{
    console.log("listening port 3000")
  })

 
  