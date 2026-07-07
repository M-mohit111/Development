const express = require("express")

const app = express();

app.listen(5001,(req,res)=>{
    console.log("now the server is activate at localhost 5001")
})

app.use("/user",(req,res,next)=>{
    console.log("hey this is the first")
    // res.send("hello sir")
    next();
},
(req,res)=>{
    console.log("hey this is the second")
    res.send("hello sir second")
})

// app.use((req,res)=>{
//     res.send("hello with path")
// })