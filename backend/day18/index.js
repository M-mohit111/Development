const express = require("express")
const main = require("./model/database")
const app = express();
const User = require("./model/user")

app.use(express.json())

app.post("/register",async (req,res)=>{

    await User.create(req.body)
    res.send("data have arrived and saved in userdata")

}) 

app.get("/info",async (req,res)=>{

    const data = await User.find()
    console.log(data);
    res.send("data have arrived")

}) 

app.get("/user/:id",async (req,res)=>{

    const data = await User.findById(req.params.id)
    console.log(data);
    res.send("data have arrived")

}) 

app.patch("/user",async (req,res)=>{

    const {_id,...updated} = req.body;
    await User.findByIdAndUpdate(_id,updated,{"runValidators":true})
    // console.log(data);
    res.send("data has updated")

})

main()
    .then(()=>{
        app.listen(5004,()=>{
            console.log("sucessfully connect to localhost 5004")
        })
    })
    // .catch((err)=>{
    //     console.error(error)
    // })