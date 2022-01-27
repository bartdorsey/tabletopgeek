const { DataTypes } = require('sequelize');

const db = require('../database.js');

const Game = db.define('game', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  artwork_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
    defaultValue: 0
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Game;