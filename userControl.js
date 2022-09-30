 //post request
 
 const userRegister=(req,res)=>{
    // res.send(`<h1>hello ${req.body.name} Form Submitted Successfuly</h1>`)

    // console.log(req.body)
    res.json({
        success:true,
        name:req.body.name,
        email:req.body.email,
        pass:req.body.password
    })
}

module.exports=userRegister