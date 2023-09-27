const express = require("express")
const bodyParser = require('body-parser');
const cors = require("cors")
require("./db/connection")
const router = require("./routers/index")
const model = require("./models/signup1")
const app = express()
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

app.listen(3040, (re, res) => {
    console.log("server listening on the 3040")
})
