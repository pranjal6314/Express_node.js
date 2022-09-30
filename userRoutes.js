const express=require("express");
const userRegister=require("./userControl")
const router=express.Router();
// router.route("/api/v1/register").post(userRegister).get((req,res)=>{
router.route("/register").post(userRegister).get((req,res)=>{
    res.send("hello from get")
})
router.route("/product").post(userRegister).get((req,res)=>{
    res.send("hello from get")
})

module.exports=router