const express = require("express")
const path = require("path")
const hbs =require("hbs")
const app = express()
const port = 3000;



// middleware
const staticpath = path.join(__dirname,"../public")
//app.use(express.static(staticpath))
const templatepath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")
// to set the view engine
app.set("view engine", "hbs")
app.set("views",templatepath)
hbs.registerPartials(partialpath)

// template engine route
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/",(req,res) =>{
    res.send("<h2>hello this is the home page<h2>")
    res.send();
});
app.get("/contact",(req,res) =>{
    res.send("hello this is the contact page")
});
app.get("/service",(req,res) =>{
    res.json([{id:1,name:"aksh"
}])
});
app.listen(port,()=>{
    console.log(`this is port no ${port}` )
})