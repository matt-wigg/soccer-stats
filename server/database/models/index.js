const db = require('../index');

module.exports = {

  updateStandings: (id, standings) => new Promise((resolve, reject) => {
    const query = { _id: id };
    const update = { _id: id, standings };
    return db.replaceOne(query, update, { upsert: true })
      .then((results) => resolve(results))
      .catch((error) => reject(error));
  }),

};
