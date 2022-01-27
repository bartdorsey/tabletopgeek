const Game = require('./game.js');
const Genre = require('./genre.js');
const Publisher = require('./publisher.js');

// Associations

Publisher.hasMany(Game);
Game.belongsTo(Publisher);

// Many to many for Games <-> Genre;
Genre.belongsToMany(Game, { through: 'games_genres' });
Game.belongsToMany(Genre, { through: 'games_genres' });

// Reexport the models with associations added
module.exports = {
  Game,
  Genre,
  Publisher
};