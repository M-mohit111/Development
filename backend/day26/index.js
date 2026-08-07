const express = require("express")
const main = require("./model/database")
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config()
const auth_router = require('./routes/authentication')
const user_router = require('./routes/userwork')
const  redisclient = require('./config/redis')
const raterlimiter = require('./utils/ratelimiter')

// console.log(process.env);

app.use(express.json());
app.use(cookieParser());

app.use(raterlimiter);

app.use("/auth",auth_router);
app.use("/user",user_router);

const Initiallizeconnection = async ()=>{
    try{

        // await redisclient.connect();
        // console.log("connected to reddis")

        // await main();
        // console.log("connect to db")

// instead of this we can use promise.all

        await Promise.all([redisclient.connect(),main()]);
        console.log("connected to db")
        console.log("connected to reddis")

        app.listen(5010,()=>{
            console.log("sucessfully connect to localhost 5010")
        })

    }
    catch(err){
        console.log("error: "+err);
    }
}

Initiallizeconnection();


// main()
//     .then(()=>{        
//     })
//     // .catch((err)=>{
//     //     console.error(error)
//     // })