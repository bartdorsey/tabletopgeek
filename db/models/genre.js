const { DataTypes } = require("sequelize")

const db = require("../database.js")

const Genre = db.define("genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Genre
