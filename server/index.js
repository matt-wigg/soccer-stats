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
app.get('/api/countries', fb.getAndUpdateCountries);
app.get('/api/leagues/type/league/:country/2020', fb.getAndUpdateLeagues);
app.get('/api/tabel/standings/:league_id', fb.getAndUpdateStandings);
app.get('/api/teams/team/:team_id', fb.getAndUpdateTeamInfo);
app.get('/api/teams/team/fixtures/:team_id', fb.getAndUpdateTeamFixtures);

// Database requests
app.get('/football/countries', fb.getCountries);
app.get('/football/leagues/type/league/:country/2020', fb.getLeagues);
app.get('/football/standings/:league_id', fb.getStandings);
app.get('/football/teams/team/:team_id', fb.getTeam);
app.get('/football/teams/team/fixtures/:team_id', fb.getFixtures);

app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
