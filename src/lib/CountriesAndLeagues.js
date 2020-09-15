export const assignCountryOptions = (countries) => {
  const parsedCountries = [];
  countries.forEach((country) => {
    parsedCountries.push({ label: country.country, value: country.country });
  });
  return parsedCountries;
};

export const assignLeagueOptions = (leagues) => {
  const parsedLeagues = [];
  leagues.forEach((league) => {
    parsedLeagues.push({ label: league.name, value: league.league_id });
  });
  return parsedLeagues;
};
