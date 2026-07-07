const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === "/")
{
    res.end("hellow mohit")
}

    else if(req.url ==="/contact"){
        res.end("this is contact page")
    }
    else{
        res.end("this is any other page")
    }

})

server.listen(4000,()=>{
    console.log("i am listening at port number 4000")
})