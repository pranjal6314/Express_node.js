const express=require("express");
const path=require("path")
const bodyparser=require("body-parser")
const app=express()
const router=require("./userRoutes");
const port=5000;
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())
app.use("/api/v1",router)
app.get("/",(req,res)=>{
    // console.log((path.join__dirname+"/index.html"))
    res.sendFile(path.join(__dirname+"/index.html"))
    
})
app.get("/api/v1/UserData",(req,res)=>{
    res.json({
        name:"pranjal",
        emal:"pranjalchoudhary270@gmail.com",
        add:"Rajasthan,India"
    })
})
// app.post("/api/v1/register",(req,res)=>{
//     res.send(`<h1>hello ${req.body.name} Form Submitted Successfuly</h1>`)

//     console.log(req.body)
//     res.json({
//         success:true,
//         name:req.body.name,
//         email:req.body.email,
//         pass:req.body.password
//     })
// })
app.listen(port,()=>{
    console.log(`server is working on port :${port}`)
})