const express = require("express")
const data = require("./user.services")
const router = express.Router();

router.post("/signup",authenticateSchema)
router.post("/signin", data.signin)

function authenticateSchema(req, res, next) {
    data.signup(req.body)
        .then(data => res.json({ message: "Success", data }))
        .catch(next);
}

module.exports = router;