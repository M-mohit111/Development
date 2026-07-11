const express = require("express")
const app = express()
const main = require("./database")

app.use(express.json())

main()
    .then(()=>{
        console.log("connection sucessfull")
        app.listen(3000,()=>{
            console.log("listening at server 3000")
        })
    })
    .catch((err)=>console.log(err))