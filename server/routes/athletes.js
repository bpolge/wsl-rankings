const express = require('express');
const bodyParser = require('body-parser');

function AthleteRoute(redisClient) {
  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      redisClient.smembersAsync('wsl:test:athlete')
        .then(result => result.map(key => {
          return redisClient.hgetallAsync(`wsl:test:athlete:${key}`)
            .then(obj => ({ ...obj, id: key }))
            .tap(newO => {
              console.log(`resulting obj: ${newO}`);
            });
        }))
        .all()
        .then(athletes => {
          res.json(athletes);
        });
    });
  const parseJson = bodyParser.json();
  router.route('/:id')
    .get((req, res) => {
      redisClient.hgetallAsync(`wsl:test:athlete:${req.params.id}`)
        .then(athlete => {
          res.json(athlete);
        });
    })
    .put(parseJson, (req, res) => {
      redisClient.hmsetAsync(`wsl:test:athlete:${req.params.id}`, req.body)
        .then(() => {
          res.sendStatus(200);
        });
    });

  router.route('/:id/:field')
    .get((req, res) => {
      redisClient.HEXISTSAsync(`wsl:test:athlete:${req.params.id}`, req.params.field)
        .then(exists => {
          if (!exists) {
            throw new Error('Field does not exist');
          }
          return redisClient.hgetAsync(`wsl:test:athlete:${req.params.id}`, req.params.field);
        })
        .then(value => {
          res.json(value);
        })
        .catch(() => {
          res.status(404).json(`${req.params.field} not found on object`);
        });
    })
    .put(bodyParser.json({ strict: false }), (req, res) => {
      redisClient.hsetAsync(`wsl:test:athlete:${req.params.id}`, req.params.field, req.body)
        .then(() => {
          res.sendStatus(200);
        });
    });

  return router;
}

module.exports = AthleteRoute;
