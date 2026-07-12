const express = require("express")
const app = express()
const main = require("./database")
const User = require("./Models/user")
app.use(express.json())

app.get("/info",async(req,res)=>{
    // res.send("hello mohit")
    const ans = await User.find({});
    res.send(ans);
})

app.post("/info",async(req,res)=>{

    const newdata = new User(req.body);
    await newdata.save();
    res.send("data updated in system")
})

app.delete("/info",async(req,res)=>{
    await User.deleteOne({name:"mohitagrawal"})
    res.send("data deleted in system")
})

app.put("/info",async(req,res)=>{
    await User.updateOne({name:"mohitagrawal"},{name:"hello"})
    res.send("data updated in system")
})

main()
    .then(()=>{
        console.log("connection sucessfull")
        app.listen(5003,()=>{
            console.log("listening at server 5003")
        })
    })
    .catch((err)=>console.log(err))