const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    fistname:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 20
    },
    lastname:{type:String},
    age:{
        type:Number,
        min:14,
        max:70
    },
    gender:{
        type:String,
        // enum:["male","female","other "] 
        // or we can use validator
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Invalid Gender")
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
        // immutable:true
    },
    password:{type:String},
    photo:{type:String} 
},{timestamps:true})

userSchema.methods.getJWT = function(){
    return jwt.sign({_id:this._id,email:this.email},process.env.SECRET_KEY,{expiresIn:10})
}

userSchema.methods.verifypassword = async function(sendpassword){
    return await bcrypt.compare(sendpassword, this.password);
}

const User = mongoose.model("User",userSchema)

module.exports = User;