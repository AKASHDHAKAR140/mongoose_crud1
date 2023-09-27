const express = require("express")
require("./db/connection")
const model = require("./model/restapi")
const router = require("./routers/index")
const app = express()
const sendMailerAllUser = require("./cron/cronjob")
app.use(express.json())
app.use(router)
sendMailerAllUser();
app.listen(3000, () => {

    console.log("listening port 3000")
})