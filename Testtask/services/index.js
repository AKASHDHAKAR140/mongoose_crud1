const express= require("express")
 const router = new express.Router()
 const todolist = require("../models/collection")
const {signup,signin} = require("../controler/usercontroler")

 router.post("/signup",signup)
 router.post("/signin",signin)
 
//  router.get("/signup",async(req,res)=>{

//     try {
//         const gettingdata = await todolist.find({})
//         res.send(gettingdata)

//     } catch (error) {
//         res.status(404).send(err)
//     }
     

//  })
//  router.get("/signup/:id",async(req,res)=>{

//     try {
//         const _id = req.params.id;
//         const gettingdata = await todolist.findById({_id})
//         res.send(gettingdata)

//     } catch (error) {
//         res.status(404).send(err)
//     }
     

//  })
//  router.patch("/signup/:id",async(req,res)=>{

//     try {
//         const _id = req.params.id;
//         const gettingdata = await todolist.findByIdAndUpdate(_id, req.body,{ new:true
//         })
//         res.send(gettingdata)

//     } catch (error) {
//         res.status(404).send(err)
//     }
     

//  })
//  router.delete("/signup/:id",async(req,res)=>{

//     try {
//         const _id = req.params.id;
//         const gettingdata = await todolist.findByIdAndDelete(req.params.id
//         )
//         res.send("delete succesfully")

//     } catch (error) {
//         res.status(404).send(err)
//     }
     

//  })


 module.exports = router;