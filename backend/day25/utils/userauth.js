const jwt = require('jsonwebtoken')
const user = require('../model/user')
const redisclient = require('../config/redis')

const userauth = async(req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
            throw new Error("token does not exist")
        }
        const payload = await jwt.verify(token,process.env.SECRET_KEY);
        const {_id} = payload;
        if(!_id){
            throw new Error ("id doesn't exist")
        }
        const result = await user.findById(_id);
        if(!result){
            throw new Error ("user doesn't exist")
        }
        const isblocked = await redisclient.exists(`token: ${token}`)
        if(isblocked){
            throw new Error("invalid token")
        }
        req.result = result;
        next();
    }
    catch(err){
        res.send("error" + err.message)
    }
}
module.exports = userauth;