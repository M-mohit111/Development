
const redisclient = require('../config/redis')
const raterlimiter = async (req,res,next)=>{

    const windowsize = 3600;
    const requestsize = 60;
    try{
        const key = `IP:${req.ip}`;
        const currenttime = Date.now()/1000;
        const windowtime = currenttime-windowsize;

        await redisclient.zRemRangeByScore(key,0,windowtime);

        const numberofrequest = await redisclient.zCard(key);

        if (numberofrequest >= requestsize) {
            return res.status(429).send("Too many requests. Try again later.");
        }

        await redisclient.zAdd(key, [{ score: currenttime, value: `${currenttime}:${Math.random()}` }]);
        await redisclient.expire(key, windowsize);

        next();
    } catch (err) {
        res.status(500).send("error: " + err.message);
    }
}
module.exports = raterlimiter