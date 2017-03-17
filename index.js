const express = require('express');
const Promise = require('bluebird');
const redis = require('redis');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();
const app = express();
app.use(express.static('public'));
app.use(express.static('bower_components'));

client.on('error', (err) => {
  console.log(`Redis Client threw error: ${err}`);
});

app.get('/athletes', (req, res) => {
  client.llenAsync('wsl.athletes')
    .then((length) => {
      return client.lrangeAsync('wsl.athletes', 0, 5);
    })
    .then((reply) => {
      res.json(reply);
    });
});

app.listen(3000, () => {
  console.log('Server started. Listening on port 3000');
});
