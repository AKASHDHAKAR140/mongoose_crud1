const express = require("express")
const signup = require("../models/signup1")
const userdata = require("../controller/usercontroller")
//const verifyToken = require("../middelware/verifyToken")

const router = new express.Router()




router.post("/signup1", userdata.validationMiddleware, userdata.signup2)
router.post("/signin",userdata.signin)

module.exports = router;