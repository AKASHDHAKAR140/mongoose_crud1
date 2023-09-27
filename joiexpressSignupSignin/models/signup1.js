const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const signup1 = new mongoose.model("signup1", Schema)

module.exports = signup1;