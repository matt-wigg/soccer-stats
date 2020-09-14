import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../assets/styles';

import SelectCountry from './SelectCountry';
import SelectLeague from './SelectLeague';
import FootballTable from './FootballTable';
import MyClubs from './MyClubs';
import ClubInfomation from './ClubInfo';
import TeamStats from './TeamStats';

import { getFootballStandings, getTeamInfo, getTeamFixtures } from '../lib/DatabaseRequests';

const MainBody = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 250px;
  grid-gap: 10px 10px;
  aligh-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  width: 90vw;
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
  width: 90vw;
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
  width: 90vw;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      standings: [],
      myClubs: [],
      teamHighlightInfo: [],
      teamHighlightFixtures: [],
    };
    this.addClubToList = this.addClubToList.bind(this);
    this.removeClubFromList = this.removeClubFromList.bind(this);
    this.highlightClubInfo = this.highlightClubInfo.bind(this);
  }

  componentDidMount() {
    getFootballStandings((standings) => this.setState({ standings }));
  }

  addClubToList(id) {
    const { standings, myClubs } = this.state;
    const findTeam = [...standings].filter((e) => e.team_id === id);
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

  render() {
    const {
      standings,
      myClubs,
      teamHighlightInfo,
      teamHighlightFixtures,
    } = this.state;
    return (
      <MainBody>
        <GlobalStyle />
        <LeagueTableAndMyClubs>
          <SelectCountry />
          <SelectLeague />
        </LeagueTableAndMyClubs>
        <LeagueTableAndMyClubs>
          <FootballTable standings={standings} addClubToList={this.addClubToList} />
          <MyClubs
            myClubs={myClubs}
            removeClubFromList={this.removeClubFromList}
            highlightClubInfo={this.highlightClubInfo}
          />
        </LeagueTableAndMyClubs>
        <ClubStats>
          <ClubInfomation teamHighlightInfo={teamHighlightInfo} />
          <TeamStats
            fixtures={teamHighlightFixtures}
            addClubToList={this.addClubToList}
          />
        </ClubStats>
      </MainBody>
    );
  }
}

export default App;
