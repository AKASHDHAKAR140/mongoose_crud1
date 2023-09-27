const express = require("express")
const router = new express.Router()
const tododata= require("../models/tododata")




router.post("/tododata", async (req, res) => {
    try {
        const addingdata = await tododata.create(req.body);
        const insertdata = await addingdata.save({})
        res.status(200).json(insertdata)

    } catch (error) {
        res.status(404).json("message: something went wroning")
    }
})
router.get("/tododata", async (req, res) => {
    try {

        const gettingdata = await tododata.find()
        res.status(200).json(gettingdata)

    } catch (error) {
        res.status(400).json("message: data not found")
    }
})
router.get("/tododata/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const gettingdata = await tododata.findById(_id)
        res.send(gettingdata)

    } catch (error) {
        res.status(400).json("message: data not found")
    }
})
router.patch("/tododata/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const gettingdata = await tododata.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).json(gettingdata)

    } catch (error) {
        res.status(400).json("message: data not found")
    }
})
router.delete("/tododata/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const gettingdata = await tododata.findByIdAndDelete(req.params.id)
      res.json("message: delete succesfully ")

    } catch (error) {
        res.status(402).json("message: data not found")
    }
})

module.exports = router;