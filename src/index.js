import express from 'express';
import Promise from 'bluebird';
import redis from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();
const app = express();
app.use(express.static('public'));
app.use(express.static('bower_components'));

client.on('error', (err) => {
  console.log(`Redis Client threw error: ${err}`);
});

const athleteRoute = require('./routes/athletes')(client);
app.use('/athletes', athleteRoute);

app.listen(3000, () => {
  console.log('Server started. Listening on port 3000');
});
