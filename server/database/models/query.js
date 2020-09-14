const {
  leagueStandings,
  teamInfo,
  teamFixtures,
  allCountries,
  countryLeagues,
  teamPlayers,
  playerStats,
} = require('../connection');

// TODO: reduce code reuse

const updateCountries = (id, countries) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, countries };
  return allCountries.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const updateCountryLeagues = (countryName, leagues) => new Promise((resolve, reject) => {
  const query = { country: countryName };
  const update = { country: countryName, leagues };
  return countryLeagues.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

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

const updateTeamFixtures = (id, fixtures) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, fixtures };
  return teamFixtures.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const updateTeamPlayers = (id, players) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, players };
  return teamPlayers.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const updatePlayerStats = (id, player) => new Promise((resolve, reject) => {
  const query = { _id: id };
  const update = { _id: id, player };
  return playerStats.replaceOne(query, update, { upsert: true })
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getAvailableCountries = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return allCountries.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getAvailableLeagues = (country) => new Promise((resolve, reject) => {
  const query = { country };
  return countryLeagues.findOne(query)
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

const getTeamFixtures = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return teamFixtures.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getTeamPlayers = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return teamPlayers.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

const getTeamPlayerStats = (id) => new Promise((resolve, reject) => {
  const query = { _id: id };
  return playerStats.findOne(query)
    .then((results) => resolve(results))
    .catch((error) => reject(error));
});

module.exports = {
  updateCountries,
  updateCountryLeagues,
  updateLeagueStandings,
  updateTeamInfo,
  updateTeamFixtures,
  updateTeamPlayers,
  updatePlayerStats,
  getAvailableCountries,
  getAvailableLeagues,
  getLeagueStandings,
  getTeamInfo,
  getTeamFixtures,
  getTeamPlayers,
  getTeamPlayerStats,
};
