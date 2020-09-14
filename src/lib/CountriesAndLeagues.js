/* eslint-disable import/prefer-default-export */
export const assignCountryOptions = (countries) => {
  const parsedCountries = [];
  countries.forEach((country) => {
    parsedCountries.push({ value: country.country, label: country.country });
  });
  return parsedCountries;
};

export const assignLeagueOptions = (leagues) => {
  const parsedLeagues = [];
  leagues.forEach((league) => {
    parsedLeagues.push({ value: league.league_id, label: league.name });
  });
  return parsedLeagues;
};
