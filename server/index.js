/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const db = require('./database/index');
const fb = require('./controllers/api');

const PORT = '1337';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.resolve('public')));
app.use('/football', express.static(path.resolve('public')));

// Daily MongoDB updates
app.get('/api/tabel/stanings/:league_id', fb.getAndUpdateStandings);

app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
