// Responsible for /api/games
const express = require('express');
const { asyncErrorHandler } = require('../utils.js');
const { Game, Publisher, Genre } = require('../db/models/index.js')

const gameRouter = express.Router();

// GET /api/games
// This is using the asyncErrorHandler we defined in utils.js
// This means we don't have to use a try catch
gameRouter.get('/', asyncErrorHandler(async (req, res, next) => {
    const games = await Game.findAll({
      attributes: ['id', 'name', 'artwork'],
      include: [{
        model: Publisher,
        attributes: ['id', 'name'],
      }, {
        model: Genre,
        attributes: ['id', 'name'],
        through: {
          attributes: []
        }
      }]
    });
    res.json(games);
}));

// POST /api/games
gameRouter.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const newGame = await Game.create(req.body);
    res.json(newGame);
  }
  catch (error) {
    next(error);
  }
});

// GET /api/games/search
gameRouter.get('/search', async (req, res, next) => {
  console.log(req.query);
  try {
    const results = await Game.findAll({
      where: {
        name: req.query.q
      }
    });
    res.json(results)
  }
  catch (error) {
    next(error);
  }
});



module.exports = gameRouter;