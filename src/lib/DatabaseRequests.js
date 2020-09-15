/* eslint-disable no-console */
import axios from 'axios';

export const getFootballStandings = (id = 2790, callback) => {
  axios.get(`/football/standings/${id}`)
    .then((standings) => {
      callback(standings.data);
    })
    .catch((err) => console.error(err));
};

export const getFootballCountries = (callback) => {
  axios.get('/football/countries')
    .then((countries) => {
      callback(countries.data);
    })
    .catch((err) => console.error(err));
};

export const getFootballLeaguess = (country, callback) => {
  axios.get(`/football/leagues/type/league/${country}/2020`)
    .then((countries) => {
      callback(countries.data);
    })
    .catch((err) => console.error(err));
};

export const getTeamInfo = (id, callback) => {
  axios.get(`/football/teams/team/${id}`)
    .then((team) => {
      callback(team.data);
    })
    .catch((err) => console.error(err));
};

export const getTeamFixtures = (id, callback) => {
  axios.get(`/football/teams/team/fixtures/${id}`)
    .then((team) => {
      callback(team.data);
    })
    .catch((err) => console.error(err));
};

export const getTeamPlayers = (id, callback) => {
  axios.get(`/football/players/squad/${id}/2020-2021`)
    .then((players) => {
      callback(players.data);
    })
    .catch((err) => console.error(err));
};

export const getPlayerStats = (id, callback) => {
  axios.get(`/football/players/player/${id}/2020-2021`)
    .then((player) => {
      callback(player.data);
    })
    .catch((err) => console.error(err));
};
