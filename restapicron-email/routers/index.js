const express = require("express")
const model = require("../model/restapi")
const router =  express.Router()

router.post("/restapi",async(req,res)=>{
    try {
        const adding = await  model.create(req.body)
        const insert = await adding.save({});
        res.status(200).json(insert)
    } catch (error) {
        res.status(404).json({message:"something went wrong"}) 
    }
})

module.exports = router