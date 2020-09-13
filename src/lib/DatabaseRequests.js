/* eslint-disable no-console */
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getFootballStandings = (callback) => {
  axios.get('/football/standings/524')
    .then((standings) => {
      callback(standings.data);
    })
    .catch((err) => console.error(err));
};
