const axios = require('axios');
const footy = require('../database/models/query');
const { host, apiKey } = require('./config');

// TODO: Reduce code-reuse
// https://api-football-v1.p.rapidapi.com/v2/leagues/type/league/england/2019
// app.get('/api/tabel/standings/:league_id', fb.getAndUpdateStandings);

const getAndUpdateCountries = (req, res) => {
  console.log('API CALL: UPDATE COUNTRIES');
  axios({
    method: 'GET',
    url: `https://${host}/v2/countries`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': host,
      'x-rapidapi-key': apiKey,
      useQueryString: true,
    },
  })
    .then((response) => {
      const { countries } = response.data.api;
      const updateDatabase = footy.updateCountries(1, countries);
      Promise.resolve(updateDatabase)
        .then(() => res.status(200).send(countries))
        .catch((error) => {
          console.log(error);
          res.status(500).send('Unable to update available countries.');
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve new countries.');
    });
};

const getAndUpdateStandings = (req, res) => {
  const leagueId = req.params.league_id;
  console.log('API CALL: UPDATE STANDINGS');
  axios({
    method: 'GET',
    url: `https://${host}/v2/leagueTable/${leagueId}`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': host,
      'x-rapidapi-key': apiKey,
      useQueryString: true,
    },
  })
    .then((response) => {
      const { standings } = response.data.api;
      const updateDatabase = footy.updateLeagueStandings(leagueId, standings);
      Promise.resolve(updateDatabase)
        .then(() => res.status(200).send(standings))
        .catch((error) => {
          console.log(error);
          res.status(500).send('Unable to update available countries.');
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve new countries.');
    });
};
// /v2/leagues/type/league/england/2019
const getAndUpdateLeagues = (req, res) => {
  const countryName = req.params.country;
  console.log('API CALL: UPDATE COUNTRY LEAGUES');
  axios({
    method: 'GET',
    url: `https://${host}/v2/leagues/type/league/${countryName}/2020`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': host,
      'x-rapidapi-key': apiKey,
      useQueryString: true,
    },
  })
    .then((response) => {
      const { leagues } = response.data.api;
      const updateDatabase = footy.updateCountryLeagues(countryName, leagues);
      Promise.resolve(updateDatabase)
        .then(() => res.status(200).send(leagues))
        .catch((error) => {
          console.log(error);
          res.status(500).send('Unable to update new leagues.');
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve new leagues.');
    });
};

const getAndUpdateTeamInfo = (req, res) => {
  const teamId = req.params.team_id;
  console.log('API CALL: GET TEAM INFO');
  axios({
    method: 'GET',
    url: `https://${host}/v2/teams/team/${teamId}`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': host,
      'x-rapidapi-key': apiKey,
      useQueryString: true,
    },
  })
    .then((response) => {
      const { teams } = response.data.api;
      const updateDatabase = footy.updateTeamInfo(teamId, teams);
      Promise.resolve(updateDatabase)
        .then(() => res.status(200).send(teams))
        .catch((error) => {
          console.log(error);
          res.status(500).send('Unable to update new team.');
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve new team.');
    });
};

const getAndUpdateTeamFixtures = (req, res) => {
  const teamId = req.params.team_id;
  console.log('API CALL: GET TEAM FIXTURES');
  axios({
    method: 'GET',
    url: `https://${host}/v2/fixtures/team/${teamId}/next/50`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': host,
      'x-rapidapi-key': apiKey,
      useQueryString: true,
    },
  })
    .then((response) => {
      const { fixtures } = response.data.api;
      const updateDatabase = footy.updateTeamFixtures(teamId, fixtures);
      Promise.resolve(updateDatabase)
        .then(() => res.status(200).send(fixtures))
        .catch((error) => {
          console.log(error);
          res.status(500).send('Unable to update new team fixtures.');
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve new team fixtures.');
    });
};

const getCountries = (req, res) => {
  const countries = footy.getAvailableCountries(1);
  Promise.resolve(countries)
    .then((results) => res.status(200).send(results.countries))
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve standings from database.');
    });
};

const getLeagues = (req, res) => {
  const countryName = req.params.country;
  const countries = footy.getAvailableLeagues(countryName);
  Promise.resolve(countries)
    .then((results) => {
      res.status(200).send(results.leagues);
    })
    .catch((error) => {
      console.log(error);
      getAndUpdateLeagues(req, res);
    });
};

const getStandings = (req, res) => {
  const leagueId = req.params.league_id;
  const standings = footy.getLeagueStandings(leagueId);
  Promise.resolve(standings)
    .then((results) => {
      res.status(200).send(results.standings);
    })
    .catch((error) => {
      console.log(error);
      getAndUpdateStandings(req, res);
    });
};

const getTeam = (req, res) => {
  const teamId = req.params.team_id;
  const team = footy.getTeamInfo(teamId);
  Promise.resolve(team)
    .then((results) => res.status(200).send(results.teams))
    .catch((err) => {
      console.log(err);
      getAndUpdateTeamInfo(req, res);
    });
};

const getFixtures = (req, res) => {
  const teamId = req.params.team_id;
  const fixtures = footy.getTeamFixtures(teamId);
  Promise.resolve(fixtures)
    .then((results) => res.status(200).send(results.fixtures))
    .catch((err) => {
      console.log(err);
      getAndUpdateTeamFixtures(req, res);
    });
};

module.exports = {
  getAndUpdateCountries,
  getAndUpdateLeagues,
  getAndUpdateTeamInfo,
  getAndUpdateStandings,
  getAndUpdateTeamFixtures,
  getCountries,
  getLeagues,
  getStandings,
  getTeam,
  getFixtures,
};
