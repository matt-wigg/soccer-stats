import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 300px;
  min-width: 850px;
  background-color: #fff;
  overflow-x: hidden;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #b2b2b2;
  }
`;

const LeagueTableHeader = styled.div`
  grid-area: header;
  display: grid;
  font-weight: 700;
  grid-template-columns: 7fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr;
  grid-template-areas:
    "club mp win loss draw gf ga gd pts last";
  padding: 5px;
  padding-top: 10px;
  background-color: #fff;
  border-bottom: 1px solid #b2b2b2;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const LeagueTableRow = styled.div`
  border-top: 1px solid #f1f3f4;
  cursor: pointer;
  grid-area: header;
  display: grid;
  font-weight: 400;
  grid-template-columns: 7fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr;
  grid-template-areas:
    "club mp win loss draw gf ga gd pts last";
  padding: 5px;
  background-color: #fff;

  &:hover {
    background-color: #00d4b1;
  }
`;

const Club = styled.div`
  grid-area: club;
  display: inline-block;
  height: 20px;
  padding-left: 10px;
`;

const MatchesPlayed = styled.div`
  grid-area: mp;
  text-align: center;
`;

const Wins = styled.div`
  grid-area: win;
  text-align: center;
`;

const Draws = styled.div`
  grid-area: draw;
  text-align: center;
`;

const Losses = styled.div`
  grid-area: loss;
  text-align: center;
`;

const GoalsFor = styled.div`
  grid-area: gf;
  text-align: center;
`;

const GoalsAgainst = styled.div`
  grid-area: ga;
  text-align: center;
`;

const GoalDifference = styled.div`
  grid-area: gd;
  text-align: center;
`;

const Points = styled.div`
  grid-area: pts;
  text-align: center;
`;

const LastFiveHeader = styled.div`
  grid-area: last;
  text-align: center;
`;

const LastFive = styled(LastFiveHeader)`
  letter-spacing: 0.2em;
`;

const ClubRank = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: inline-block;
  width: 20px;
`;

const ClubLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: inline-block;
  padding-left: 10px;
`;

const ClubInfo = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: inline-block;
  padding-left: 10px;
`;

const FootballTable = ({ standings, addClubToList }) => (
  <section>
    <LeagueTableHeader>
      <Club>Club</Club>
      <MatchesPlayed>MP</MatchesPlayed>
      <Wins>W</Wins>
      <Draws>D</Draws>
      <Losses>L</Losses>
      <GoalsFor>GF</GoalsFor>
      <GoalsAgainst>GA</GoalsAgainst>
      <GoalDifference>GD</GoalDifference>
      <Points>Pts</Points>
      <LastFiveHeader>Last 5</LastFiveHeader>
    </LeagueTableHeader>
    <LeagueTable>
      {standings.map((team) => (
        <LeagueTableRow key={team.team_id} onClick={() => addClubToList(team.team_id)}>
          <Club>
            <ClubRank>{team.rank}</ClubRank>
            <ClubLogo src={team.logo} alt={team.teamName} />
            <ClubInfo>{team.teamName}</ClubInfo>
          </Club>
          <MatchesPlayed>{team.all.matchsPlayed}</MatchesPlayed>
          <Wins>{team.all.win}</Wins>
          <Draws>{team.all.draw}</Draws>
          <Losses>{team.all.lose}</Losses>
          <GoalsFor>{team.all.goalsFor}</GoalsFor>
          <GoalsAgainst>{team.all.goalsAgainst}</GoalsAgainst>
          <GoalDifference>{team.goalsDiff}</GoalDifference>
          <Points>{team.points}</Points>
          <LastFive>{team.forme}</LastFive>
        </LeagueTableRow>
      ))}
    </LeagueTable>
  </section>
);

FootballTable.propTypes = {
  standings: PropTypes.arrayOf(PropTypes.object).isRequired,
  addClubToList: PropTypes.func.isRequired,

};

export default FootballTable;
