const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',
  { useUnifiedTopology: true });

client.connect().then(() => console.log('connected'));

const leagueStandings = client.db('football').collection('standings');
const teamInfo = client.db('football').collection('team');
const teamFixtures = client.db('football').collection('fixtures');
const allCountries = client.db('football').collection('countries');
const countryLeagues = client.db('football').collection('leagues');
const teamPlayers = client.db('football').collection('players');
const playerStats = client.db('football').collection('player-stats')

module.exports = {
  leagueStandings,
  teamInfo,
  teamFixtures,
  allCountries,
  countryLeagues,
  teamPlayers,
  playerStats,
};
