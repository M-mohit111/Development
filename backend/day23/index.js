const express = require("express")
const main = require("./model/database")
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config()
const auth_router = require('./routes/authentication')
const user_router = require('./routes/userwork')

// console.log(process.env);

app.use(express.json());
app.use(cookieParser());

app.use("/auth",auth_router);
app.use("/user",user_router);

main()
    .then(()=>{
        app.listen(5010,()=>{
            console.log("sucessfully connect to localhost 5010")
        })
    })
    // .catch((err)=>{
    //     console.error(error)
    // })