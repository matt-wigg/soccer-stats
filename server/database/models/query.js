const db = require('../connection');

const updateLeagueStandings = (id, standings) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, standings };
  return db.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getLeagueStandings = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return db.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

module.exports = {
  updateLeagueStandings,
  getLeagueStandings,
};
