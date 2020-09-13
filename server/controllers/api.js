const axios = require('axios');
const footy = require('../database/models/query');
const { host, apiKey } = require('./config');

// TODO: Reduce code-reuse

const getAndUpdateStandings = (req, res) => {
  const leagueId = req.params.league_id;
  console.log('API CALL: updateStandings');
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
          res.status(500).send('Unable to update new standings.');
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve new standings.');
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

const getStandings = (req, res) => {
  const leagueId = req.params.league_id;
  const standings = footy.getLeagueStandings(leagueId);
  Promise.resolve(standings)
    .then((results) => res.status(200).send(results.standings[0]))
    .catch((error) => {
      console.log(error);
      res.status(500).send('Unable to retrieve standings from database.');
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
  console.log(teamId);
  const fixtures = footy.getTeamFixtures(teamId);
  Promise.resolve(fixtures)
    .then((results) => res.status(200).send(results.fixtures))
    .catch((err) => {
      console.log(err);
      getAndUpdateTeamFixtures(req, res);
    });
};

module.exports = {
  getAndUpdateTeamInfo,
  getAndUpdateStandings,
  getAndUpdateTeamFixtures,
  getStandings,
  getTeam,
  getFixtures,
};


// https://api-football-v1.p.rapidapi.com/v2/fixtures/team/63/next/50
