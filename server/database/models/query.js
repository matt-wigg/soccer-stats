const { leagueStandings, teamInfo } = require('../connection');

const updateLeagueStandings = (id, standings) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, standings };
  return leagueStandings.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const updateTeamInfo = (id, teams) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, teams };
  return teamInfo.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getLeagueStandings = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return leagueStandings.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getTeamInfo = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return teamInfo.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

module.exports = {
  updateLeagueStandings,
  updateTeamInfo,
  getLeagueStandings,
  getTeamInfo,
};
