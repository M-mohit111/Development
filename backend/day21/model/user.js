const mongoose = require('mongoose')

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

const User = mongoose.model("User",userSchema)

module.exports = User;