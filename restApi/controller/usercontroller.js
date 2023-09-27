
const userdata = require("../models/restapi")



const restapi1 = async (req, res) => {
    try {
        const addingdata = await userdata.create(req.body);
        const insertdata = await addingdata.save({})
        res.status(200).json(insertdata)

    } catch (error) {
        res.status(404).json("message: something went wroning")
    }
}



const restget = async (req, res) => {
    try {

        const gettingdata = await userdata.find()
        res.status(200).json(gettingdata)

    } catch (error) {
        res.status(400).json("message: data not found")
    }
}

const restgetbyid = async (req, res) => {
    try {
        const _id = req.params.id;
        const gettingdata = await userdata.findById(_id)
        res.send(gettingdata)

    } catch (error) {
        res.status(400).json("message: data not found")
    }
}

const restupdate =  async (req, res) => {
    try {
        const _id = req.params.id;
        const gettingdata = await userdata.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).json(gettingdata)

    } catch (error) {
        res.status(400).json("message: data not found")
    }
}

const restdelete= async (req, res) => {
    try {
        const _id = req.params.id;
        const gettingdata = await userdata.findByIdAndDelete(req.params.id)
      res.json("message: delete succesfully ")

    } catch (error) {
        res.status(402).json("message: data not found")
    }
}

module.exports = {restapi1,restget,restgetbyid,restupdate ,restdelete}