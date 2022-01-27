const express = require('express');
const volleyball = require('volleyball');
const apiRouter = require('./routes/apiRouter.js');

const app = express();

// Log requests
app.use(volleyball);

// This allows us to use JSON in the body of the request
app.use(express.json());

// Routers
app.use('/api', apiRouter);


module.exports = app;