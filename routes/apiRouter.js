// Responsible for /api
const express = require('express');
const gameRouter = require('./gameRouter.js');
const apiRouter = express.Router();

apiRouter.use('/games', gameRouter);

apiRouter.use((req, res, next) => {
  res.status(404);
  res.json({
    status: 'Not Found'
  })
});

apiRouter.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    name: err.name,
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : ''
  });
});

module.exports = apiRouter;