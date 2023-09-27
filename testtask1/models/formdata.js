const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  taskname: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  description: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  date: {
    new:Date
    // unique: true,
    // trim: true,
  },
});
const formdata = new mongoose.model("formdata", Schema);
module.exports = formdata;
