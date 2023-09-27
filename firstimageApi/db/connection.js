const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/user-product")
    .then((res) => {
        console.log("connect succesfully");
    })
    .catch((err) => {
        console.log("failed connection")
    })