/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const fb = require('./controllers/api');

const PORT = '1337';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.resolve('public')));
app.use('/football', express.static(path.resolve('public')));

// External API-FOOTBALL calls
app.get('/api/tabel/standings/:league_id', fb.getAndUpdateStandings);

// Database requests
app.get('/football/standings/:league_id', fb.getStandings);

app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
