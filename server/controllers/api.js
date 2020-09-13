const axios = require('axios');
const footy = require('../database/models/query');
const { host, apiKey } = require('./config');

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

module.exports = {
  getAndUpdateTeamInfo,
  getAndUpdateStandings,
  getStandings,
  getTeam,
};
