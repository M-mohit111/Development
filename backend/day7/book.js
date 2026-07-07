const express = require("express")

const app = express()

app.use(express.json())

const bookstore = [
    {id:1,name:"harry",authore:"jk"},
    {id:2,name:"dune",authore:"devis"},
    {id:3,name:"got",authore:"rr"},
    {id:4,name:"boys",authore:"shaktiman"},
    {id:5,name:"got",authore:"rr"}
]



app.patch("/book",(req,res)=>{
    console.log(req.body)
    const userdata = bookstore.find(info=>info.id === req.body.id)

    if(req.body.authore){
    userdata.authore = req.body.authore
    }
    if(req.body.name){
    userdata.name = req.body.name
    }
    res.send("patch updated")
})

app.patch("/book",(req,res)=>{
    console.log(req.body)
    const userdata = bookstore.find(info=>info.id === req.body.id)
    userdata.authore = req.body.authore
    userdata.name = req.body.name
    res.send("patch updated")
})

app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const userdata = bookstore.findIndex(info=>info.id === id)
    bookstore.splice(userdata,1)
    res.send("delete")
})

app.get("/book",(req,res)=>{
    res.send(bookstore)
})
app.get("/book/:id",(req,res)=>{
    const m = parseInt(req.params.id);
    console.log(typeof m)
    const data = bookstore.find(info=>info.id===m)
    res.send(data)
})  
app.post("/book",(req,res)=>{
    bookstore.push(req.body)
    res.send("data saved")
})
app.listen(5000,()=>{
    console.log("server is active at localhost 5000");
}) 
