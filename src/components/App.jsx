import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../assets/styles';

import SelectCountry from './SelectCountry';
import SelectLeague from './SelectLeague';
import FootballTable from './FootballTable';
import MyClubs from './MyClubs';
import ClubInfomation from './ClubInfo';
import TeamStats from './TeamStats';

import {
  getFootballStandings,
  getFootballCountries,
  getFootballLeaguess,
  getTeamInfo,
  getTeamFixtures,
} from '../lib/DatabaseRequests';

import { assignCountryOptions, assignLeagueOptions } from '../lib/CountriesAndLeagues';

const MainBody = styled.div`
  padding-top: 25px;
  display: flex;
  flex-flow: column;
  min-width: 250px;
  grid-gap: 10px 10px;
  aligh-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  width: 70vw;
`;

const LeagueTableAndMyClubs = styled.div`
  display: flex;
  flex-flow: row;
  min-width: 250px;
  grid-gap: 10px 10px;
  aligh-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  width: 70vw;
`;

const ClubStats = styled.div`
  display: flex;
  flex-flow: row;
  min-width: 250px;
  grid-gap: 10px 10px;
  aligh-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  width: 70vw;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      standings: [],
      countries: [],
      leagues: [],
      myClubs: [],
      teamHighlightInfo: [],
      teamHighlightFixtures: [],
    };
    this.addClubToList = this.addClubToList.bind(this);
    this.removeClubFromList = this.removeClubFromList.bind(this);
    this.highlightClubInfo = this.highlightClubInfo.bind(this);
    this.updateCountryLeagueList = this.updateCountryLeagueList.bind(this);
    this.updateFootballStandings = this.updateFootballStandings.bind(this);
  }

  componentDidMount() {
    getFootballStandings(2790, (standings) => this.setState({ standings }));
    getFootballCountries((availableCountries) => {
      const countries = assignCountryOptions(availableCountries);
      this.setState({ countries });
    });
  }

  addClubToList(id) {
    const { standings, myClubs } = this.state;
    const findTeam = [...standings].map((team) => team.find((e) => e.team_id === id))
      .filter((e) => e !== undefined);
    if (!myClubs.some((club) => club.team_id === id)) {
      this.setState((prevState) => ({
        myClubs: [findTeam[0], ...prevState.myClubs],
      }));
    }
  }

  removeClubFromList(id) {
    const { myClubs } = this.state;
    const newClubs = [...myClubs].filter((e) => e.team_id !== id);
    this.setState({ myClubs: newClubs });
  }

  highlightClubInfo(id) {
    getTeamInfo(id, (teamHighlightInfo) => {
      this.setState({ teamHighlightInfo });
    });
    getTeamFixtures(id, (teamHighlightFixtures) => {
      this.setState({ teamHighlightFixtures });
    });
  }

  updateCountryLeagueList(country) {
    const { value } = country;
    getFootballLeaguess(value, (allLeagues) => {
      const leagues = assignLeagueOptions(allLeagues);
      this.setState({ leagues });
    });
  }

  updateFootballStandings(league) {
    const { value } = league;
    console.log(value);
    getFootballStandings(value, (standings) => this.setState({ standings }));
  }

  render() {
    const {
      standings,
      countries,
      leagues,
      myClubs,
      teamHighlightInfo,
      teamHighlightFixtures,
    } = this.state;
    return (
      <MainBody>
        <GlobalStyle />
        <LeagueTableAndMyClubs>
          <SelectCountry
            countries={countries}
            updateCountryLeagueList={this.updateCountryLeagueList}
          />
          <SelectLeague leagues={leagues} updateFootballStandings={this.updateFootballStandings} />
        </LeagueTableAndMyClubs>
        <LeagueTableAndMyClubs>
          <FootballTable standings={standings} addClubToList={this.addClubToList} />
          <MyClubs
            myClubs={myClubs}
            removeClubFromList={this.removeClubFromList}
            highlightClubInfo={this.highlightClubInfo}
          />
        </LeagueTableAndMyClubs>
        {teamHighlightFixtures.length ? (
          <ClubStats>
            <ClubInfomation teamHighlightInfo={teamHighlightInfo} />
            <TeamStats
              fixtures={teamHighlightFixtures}
              addClubToList={this.addClubToList}
            />
          </ClubStats>
        ) : null}
      </MainBody>
    );
  }
}

export default App;
