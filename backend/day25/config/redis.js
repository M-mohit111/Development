const redis = require('redis');

const redisclient = redis.createClient({
    username: 'default',
    password: 'rGgbEZJA0N6stvlfZZMAhpsOushW38aT',
    socket: {
        host: 'giraffe-majestic-vespertine-44538.db.redis.io',
        port: 18112
    }
});

module.exports = redisclient