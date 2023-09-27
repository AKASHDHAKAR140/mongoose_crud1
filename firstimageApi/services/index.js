const express = require("express")
const product= require("../models/product")

const router = new express.Router()
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname )
    }
  })

  const fileFilter = (req,file,cb)=>{
   if(file.mimetype==="image/jpeg" ||file.mimetype==="image/png"||file.mimetype==="image/jpg" ){
    cb(null,true)
   }else {
    cb(null,false)
   }
  }
const upload = multer({ storage: storage,
   limits:{
    fileSize:1024*1024*5
   },
   fileFilter:fileFilter
})

router.post("/product",upload.single("productImage"),async(req,res)=>{
    
    try {
        const {productname,productdetails,productprice,image} = req.body;
        const adding = new product({
            productname:productname,
            productdetails:productdetails,
            productprice:productprice,
            image : req.file.path
        })
        const insert = await  adding.save({});
        res.status(200).json(insert);
    } catch (error) {
        res.status(400).json("msg: somethings went wrong")
    }
})
router.get("/product",async(req,res)=>{
    try {
    
        const insert = await product.find();
        res.status(200).json(insert);
    } catch (error) {
        res.status(400).json("msg: somethings went wrong")
    }
})

module.exports =  router