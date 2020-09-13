const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',
  { useUnifiedTopology: true });

client.connect().then(() => console.log('connected'));

const leagueStandings = client.db('football').collection('standings');
const teamInfo = client.db('football').collection('team');

module.exports = { leagueStandings, teamInfo };
