import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../assets/styles';

import FootballTable from './FootballTable';
import MyClubs from './MyClubs';
import ClubInfomation from './ClubInfo';

import { getFootballStandings } from '../lib/DatabaseRequests';

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 10px;
  aligh-items: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      standings: [],
      myClubs: [],
      clubHighlight: [],
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
        myClubs: [...prevState.myClubs, findTeam[0]],
      }));
    }
  }

  removeClubFromList(id) {
    const { myClubs } = this.state;
    const newClubs = [...myClubs].filter((e) => e.team_id !== id);
    console.log(newClubs);
    this.setState({ myClubs: newClubs });
  }

  highlightClubInfo(id) {
    const { myClubs } = this.state;
    const clubHighlight = [...myClubs].filter((e) => e.team_id === id);
    this.setState({ clubHighlight });
  }

  render() {
    const { standings, myClubs, clubHighlight } = this.state;
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
        <ClubInfomation clubHighlight={clubHighlight} />
      </MainBody>
    );
  }
}

export default App;
