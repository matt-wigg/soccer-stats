import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../assets/styles';

import SelectCountry from './SelectCountry';
import SelectLeague from './SelectLeague';
import LeagueStandings from './LeagueStandings';
import MyClubs from './MyClubs';
import ClubInfomation from './ClubInfo';
import TeamFixtures from './TeamFixtures';
import TeamPlayers from './TeamPlayers';
import PlayerHighlightedStats from './PlayerHighlightedStats';

import {
  getFootballStandings,
  getFootballCountries,
  getFootballLeaguess,
  getTeamInfo,
  getTeamFixtures,
  getTeamPlayers,
  getPlayerStats,
} from '../lib/DatabaseRequests';

import { assignCountryOptions, assignLeagueOptions } from '../lib/CountriesAndLeagues';

const MainBody = styled.div`
  aligh-items: center;
  display: flex;
  flex-flow: column;
  grid-gap: 10px 10px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  min-width: 250px;
  padding-top: 5px;
  width: 80vw;
`;

const ClubInformationSection = styled.div`
  aligh-items: center;
  display: flex;
  flex-flow: row;
  grid-gap: 10px 10px;
  margin-left: auto;
  margin-right: auto;
  max-height: 365px;
  max-width: 1600px;
  min-width: 250px;
  width: 80vw;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      standings: [],
      countries: [],
      leagues: [],
      myClubs: [],
      teamPlayers: [],
      teamHighlightInfo: [],
      playerHighlightInfo: [],
      teamHighlightFixtures: [],
    };
    this.addClubToList = this.addClubToList.bind(this);
    this.removeClubFromList = this.removeClubFromList.bind(this);
    this.highlightClubInfo = this.highlightClubInfo.bind(this);
    this.highlightPlayerInfo = this.highlightPlayerInfo.bind(this);
    this.updateCountryLeagueList = this.updateCountryLeagueList.bind(this);
    this.updateFootballStandings = this.updateFootballStandings.bind(this);
  }

  componentDidMount() {
    // leeds united placeholders
    getFootballStandings(2790, (standings) => {
      this.setState({ standings });
      this.highlightClubInfo(63);
      this.addClubToList(63);
      this.highlightPlayerInfo(19130);
    });
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
    this.highlightClubInfo(id);
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
    getTeamFixtures(id, (teamHighlightFixtures) => this.setState({ teamHighlightFixtures }));
    getTeamPlayers(id, (teamPlayers) => this.setState({ teamPlayers }));
  }

  highlightPlayerInfo(id) {
    getPlayerStats(id, (playerHighlightInfo) => this.setState({ playerHighlightInfo }));
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
    getFootballStandings(value, (standings) => this.setState({ standings }));
  }

  render() {
    const {
      standings,
      countries,
      leagues,
      myClubs,
      teamPlayers,
      teamHighlightInfo,
      playerHighlightInfo,
      teamHighlightFixtures,
    } = this.state;
    return (
      <MainBody>
        <GlobalStyle />
        <ClubInformationSection>
          <SelectCountry
            countries={countries}
            updateCountryLeagueList={this.updateCountryLeagueList}
          />
          <SelectLeague
            leagues={leagues}
            updateFootballStandings={this.updateFootballStandings}
          />
        </ClubInformationSection>
        {standings.length ? (
          <ClubInformationSection>
            <LeagueStandings
              standings={standings}
              addClubToList={this.addClubToList}
            />
            <MyClubs
              myClubs={myClubs}
              removeClubFromList={this.removeClubFromList}
              highlightClubInfo={this.highlightClubInfo}
            />
          </ClubInformationSection>
        ) : null}
        {teamHighlightFixtures.length ? (
          <ClubInformationSection>
            <ClubInfomation teamHighlightInfo={teamHighlightInfo} />
            <TeamFixtures
              fixtures={teamHighlightFixtures}
              addClubToList={this.addClubToList}
            />
          </ClubInformationSection>
        ) : null}
        {teamPlayers.length ? (
          <ClubInformationSection>
            <TeamPlayers
              players={teamPlayers}
              highlightPlayerInfo={this.highlightPlayerInfo}
            />
            <PlayerHighlightedStats playerHighlightInfo={playerHighlightInfo} />
          </ClubInformationSection>
        ) : null}
      </MainBody>
    );
  }
}

export default App;
