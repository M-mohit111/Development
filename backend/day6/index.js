const express  =  require("express")

const app = express();

// ? we can skip the thing before ? sign
// + we can add multiple time the same thing again and again
// * we can add anything after this sign

app.listen(4000,()=>{
    console.log("hello server is activated at port 4000")
})
// app.use((req,res)=>{
//     res.send({"name":"mohit","age":20})
// })
app.use("/about",(req,res)=>{
    res.send("this is the about pages")
})
app.use("/contact",(req,res)=>{
    res.send("this is the contact page")
})
app.use("/",(req,res)=>{
    res.send({"name":"mohit","age":20})
})