const express = require("express")
const imageschema = require("../models/imageschema")
const router = new express.Router()
const upload = require("../multer/storage")
router.post("/imageschema",upload.single("userImage"), async(req,res)=>{
        console.log(req.file)
    try {
       const {name,image} = req.body;
       
       const adding = new imageschema({
        name:name,
        image:req.file.path 
       })
     //const adding = await imageschema.create(req.body)
     const insert = await adding.save({})
       res.status(200).json(insert)
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
})


router.get("/imageschema",async(req,res)=>{
    try {
        const getting = await imageschema.find();
        res.status(200).json(getting);
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
})
module.exports = router;