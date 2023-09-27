const express = require("express")
const restapi = require("../models/restapi")
const models = require("../controller/usercontroller")
const router = new express.Router()

router.post("/restapi", models.restapi1)
router.get("/restapi", models.restget)
router.get("/restapi/:id", models.restgetbyid)
router.patch("/restapi/:id", models.restupdate)
router.delete("/restapi/:id", models.restdelete)

module.exports = router;