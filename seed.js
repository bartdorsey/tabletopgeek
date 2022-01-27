const db = require('./db/database.js');
const { Game, Publisher, Genre } = require('./db/models/index.js');

async function seed() {
  await db.sync({ force: true }); 

  // Insert some games
  const pandemic = await Game.create({
    name: "Pandemic",
    artwork_url:
      "https://freddiesmummyuk.com/wp-content/uploads/2018/10/IMG_20181001_095450_401-3809485246-1538392121440.jpg",
    description:
      "Your team of experts must prevent the world from succumbing to a viral pandemic. ",
    year: 2008
  });

  const zManGames = await Publisher.create({
    name: "Z-Man Games",
    artwork_url: "",
    description: "Nisi irure reprehenderit nisi exercitation minim magna proident."
  });

  // add pandemic to list of games for zman
  await zManGames.addGame(pandemic);

  const strategy = await Genre.create({
    name: "Strategy"
  });
  const coop = await Genre.create({
    name: "Co-operative"
  });

  await pandemic.addGenres([strategy, coop]);

  await db.close();
}

seed();