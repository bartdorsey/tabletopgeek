const { Sequelize } = require('sequelize');
const log = require('sequelize-pretty-logger')();

const DATABASE_URL = 'postgres://localhost:5432/tabletopgeek';

const db = new Sequelize(DATABASE_URL, {
  logging: log
});

module.exports = db;