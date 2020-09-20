/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const { username, password, ip } = require('./config');

const client = new MongoClient(`mongodb://localhost:27017/`,
  { useUnifiedTopology: true, poolSize: 50 });

client.connect().then(() => console.log('connected')).catch((error) => console.log(error));

const leagueStandings = client.db('football').collection('standings');
const teamInfo = client.db('football').collection('teams');
const teamFixtures = client.db('football').collection('fixtures');
const allCountries = client.db('football').collection('countries');
const countryLeagues = client.db('football').collection('leagues');
const teamPlayers = client.db('football').collection('players');
const playerStats = client.db('football').collection('player-stats');

module.exports = {
  leagueStandings,
  teamInfo,
  teamFixtures,
  allCountries,
  countryLeagues,
  teamPlayers,
  playerStats,
};
