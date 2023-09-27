const express = require("express")
const router = new express.Router()
const login = require("../models/collectdata")


router.post("/collectdata",async (req,res)=>{
    try{
        const addingdata = new login(req.body);
        const insertdata =  await  addingdata.save();
        res.send(insertdata);
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/collectdata", async (req,res)=>{
    try{
        const addingdata = await login.find({});
        res.send(addingdata);
    }catch(err){
        res.status(400).send(err);
    }
  
});
module.exports = router;