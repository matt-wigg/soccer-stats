const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',
  { useUnifiedTopology: true });

client.connect().then(() => console.log('connected'));

const db = client.db('football').collection('standings');

module.exports = db;
