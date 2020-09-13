import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../assets/styles';

import FootballTable from './FootballTable';
import MyClubs from './MyClubs';
import ClubInfomation from './ClubInfo';

import { getFootballStandings, getTeamInfo } from '../lib/DatabaseRequests';

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px 10px;
  aligh-items: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      standings: [],
      myClubs: [],
      teamHighlightInfo: [],
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
  }

  render() {
    const { standings, myClubs, teamHighlightInfo } = this.state;
    console.log(myClubs);
    return (
      <MainBody>
        <GlobalStyle />
        <FootballTable standings={standings} addClubToList={this.addClubToList} />
        <MyClubs
          myClubs={myClubs}
          removeClubFromList={this.removeClubFromList}
          highlightClubInfo={this.highlightClubInfo}
        />
        <ClubInfomation teamHighlightInfo={teamHighlightInfo} />
      </MainBody>
    );
  }
}

export default App;
