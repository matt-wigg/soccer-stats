const axios = require('axios');
const { host, apiKey } = require('./config');
const { updateStandings } = require('../database/models/index');

module.exports = {

  getAndUpdateStandings: (req, res) => {
    axios({
      method: 'GET',
      url: `https://${host}/v2/leagueTable/${req.params.league_id}`,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': host,
        'x-rapidapi-key': apiKey,
        useQueryString: true,
      },
    })
      .then((response) => {
        const updateDatabase = updateStandings(req.params.league_id, response.data.api.standings);
        Promise.resolve(updateDatabase)
          .then(() => res.status(200).send(response.data.api.standings))
          .catch((error) => {
            console.log(error);
            res.status(500).send('Unable to update new standings.');
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Unable to retrieve new standings.');
      });
  },
};
