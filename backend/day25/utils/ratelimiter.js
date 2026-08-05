const redisclient = require('../config/redis')

const raterlimiter = async (req,resizeBy,next)=>{

    const ip = req.ip;
    const count = await redisclient.incr(ip);

    if(count>60){
        throw new Error("User limit exceeded")
    }

    if(count == 1){
        await redisclient.expire(3600);
    }
    next();
}

module.exports = raterlimiter