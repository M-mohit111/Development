require("dotenv").config();

const express = require('express')

const app = express();

const main = require('./aichat')

app.use(express.json())


const chatHistory = [];

app.post("/chat",async(req,res)=>{

  const {id,msg} = req.body;

  if(!chatHistory[id]){
    chatHistory[id] = [];
  }

  const history = chatHistory[id];

  const prompt = [...history,{
    id:"user",
    message : msg
  }]

  const answer = await main(prompt);

  history.push({role:"user",message:msg});
  history.push({role:"model",message:answer});

  res.send(answer)

})


app.listen(1000,(req,res)=>{
  console.log("servers is active at port number 1000");
})
