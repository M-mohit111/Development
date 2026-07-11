const { mongoose } = require('mongodb');
const mongoose = require('mongoose')
const {schema} = mongoose;

const userSchema = new mongoose.Schema({
    string : name,
    string : age 
})

const user = mongoose.model("user",userSchema)