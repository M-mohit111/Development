const express = require('express');
const validateuser = require("../utils/validatoruser")
const User = require("../model/user");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const userauth = require('../utils/userauth')

const auth_router = express.Router(); 

auth_router.post("/register",async (req,res)=>{
    try{
        validateuser(req.body);
        req.body.password = await bcrypt.hash(req.body.password,10);
        console.log(req.body.password);
        await User.create(req.body)
        res.send("user registration successfull")
    }
    catch(err){
        res.send("error "+err.message);
    }
})

auth_router.post("/login", async (req, res) => {
    try {
        const personinfo = await User.findOne({
            email: req.body.email
        });

        if (!personinfo) {
            throw new Error("Invalid credentials");
        }

        const isallowed = await personinfo.verifypassword(req.body.password);
        if (!isallowed) {
            throw new Error("invalid crediential")
        }

        const token = personinfo.getJWT();
        res.cookie("token", token);
        res.send("login sucessfully")
    }
    catch(err){
        res.send("error " + err.message);
    }
})

auth_router.post("/logout",async(req,res)=>{
    try{
        // res.cookie("token","dfjdlfkjdlfdlfldjfldjfl")
        res.cookie("token",null,{expires: new Date(Date.now())})
        res.send("loggout sucessfully")
    }
    catch(err){
        res.send("error " + err.message)
    }
})

module.exports = auth_router