import express from 'express';

const Promise = require('bluebird');
const redis = require('redis');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();
const app = express();
app.use(express.static('public'));

client.on('error', err => {
  console.log(`Redis Client threw error: ${err}`);
});

app.route('/', (req, res) => {
  res.json('hello world');
});
const athleteRoute = require('./routes/athletes')(client);
app.use('/athletes', athleteRoute);

app.listen(3000, () => {
  console.log('Server started. Listening on port 3000');
});
