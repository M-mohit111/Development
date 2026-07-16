const express = require("express")
const main = require("./model/database")
const app = express();
const validateuser = require("./utils/validatoruser")
const User = require("./model/user");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt")

app.use(express.json())
app.post("/register",async (req,res)=>{
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