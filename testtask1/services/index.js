const express = require("express");
const router = new express.Router();
//const {signup2,signin} = require("../Controllers/usercontroler")
const UserList1 = require("../models/formdata");



router.post("/formdata", async (req, res)  => {
    
    try {
        const addingdata =  await UserList1.create(req.body)
        const data= await addingdata.save({});
        res.json(data);
    
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get("/formdata", async (req, res)  => {
    try {
        const getMens =  await UserList1.find({});
        res.send(getMens);
    
    } catch (err) {
        res.status(400).send(err);
    }
});

//Get Special One Data
router.get("/formdata/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await UserList1.findById({_id});
        res.send(getMen);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Patch Special One Data
router.patch("/formdata/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await UserList1.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete the data
router.delete("/formdata/:id", async (req, res) => {
    try {
        // const _id = req.params.id;
        const getMen = await UserList1.findByIdAndDelete(req.params.id);
        res.send("Successgful Deleted");
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
