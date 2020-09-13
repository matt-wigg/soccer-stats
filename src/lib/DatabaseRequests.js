/* eslint-disable no-console */
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getFootballStandings = (callback) => {
  axios.get('/football/standings/2790')
    .then((standings) => {
      callback(standings.data);
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
