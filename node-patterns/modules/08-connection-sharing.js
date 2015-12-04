var Redis = require('redis'),
    config = require('./config').redis;

// initialize the redis client connection
var redisClient = Redis.createClient(config.port, config.host, config.options);

// share the redis client connection
module.exports = redisClient;

// Then the modules that need a connection to the Redis server can simply do :
// var redis = require('./redis');
// redis.get('somekey', function(err, reply) {
//     //...
// });
