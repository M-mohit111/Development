const express = require("express")
const User = require("../model/user");
const userauth = require('../utils/userauth')
require('dotenv').config()

const user_router = express.Router();

user_router.get("/info",userauth,async (req,res)=>{
    try{
        res.send(req.result)
        // // first it will varify that wether that user exist or not

        // // first verify where the given cookie is correct or not
        // const payload = jwt.verify(token,"keyforsignature");
        // console.log(payload)

        // const data = await User.find()
        // // console.log(req.cookies)
        // // console.log(data);
        // res.send("data have arrived") 
    }
    catch(err){
        res.send("error"+err.message)
    }

})

user_router.get("/:id",async (req,res)=>{
    const data = await User.findById(req.params.id)
    console.log(data);
    res.send("data have arrived")
})

user_router.patch("/",async (req,res)=>{
    const {_id,...updated} = req.body;
    await User.findByIdAndUpdate(_id,updated,{"runValidators":true})
    // console.log(data);
    res.send("updated")
})

module.exports = user_router