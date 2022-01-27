const { DataTypes } = require("sequelize")

const db = require("../database.js")

const Publisher = db.define("publisher", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artwork_url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
})

module.exports = Publisher
