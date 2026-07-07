const express  = require   ("express")

const app = express()

app.use(express.json())

app.listen(4000,()=>{
    console.log("this server is activate on localhost 4000")
})

// app.use((req,res)=>{
//     res.send("hello yes it is working")
// })

app.get("/user",(req,res)=>{
    res.send("hello yes it is working")
})

app.post("/user",(req,res)=>{
    console.log(req.body)
    res.send("data send suceessfully")
})
