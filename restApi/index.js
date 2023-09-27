const express = require("express")

require("./db/connection")


const router = require('./routes/todorouter')
//const router = require('./routes/index')
//const restapi = require("./models/restapi")
const tododata = require("./models/tododata")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3084
app.use(cors())
app.use(express.json())
app.use('/api', router)
//app.use( router)
// app.use(cors({origin:'*'}))
 
app.listen(port, (req, res) => {
    console.log(`server listening on ${port}`)
})
