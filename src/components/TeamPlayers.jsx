import React from 'react';
import styled from 'styled-components';

const FootballTableContainer = styled.div`
  width: 100%;
  max-height: 300px;
`;

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 100%;
  max-height: 325px;
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
  grid-template-columns: 3fr 2fr 2fr 1fr 1fr 1fr;
  grid-template-areas:
    "name position nationality age height weight";
  padding: 5px;
  padding-top: 10px;
  background-color: #fff;
  border-bottom: 1px solid #b2b2b2;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  min-width: 100%;
`;

const LeagueTableRow = styled.div`
  border-top: 1px solid #f1f3f4;
  cursor: pointer;
  grid-area: header;
  display: grid;
  font-weight: 400;
  grid-template-columns: 3fr 2fr 2fr 1fr 1fr 1fr;
  grid-template-areas:
    "name position nationality age height weight";
  padding: 5px;
  background-color: #fff;

  &:hover {
    background-color: #00d4b1;
  }
`;

const PlayerName = styled.div`
  grid-area: name;
  display: inline-block;
  height: 20px;
  padding-left: 10px;
`;

const PlayerPosition = styled.div`
  grid-area: position;
  text-align: center;
`;

const PlayerNationality = styled.div`
  grid-area: nationality;
  text-align: center;
`;

const PlayerAge = styled.div`
  grid-area: age;
  text-align: center;
`;

const PlayerHeight = styled.div`
  grid-area: height;
  text-align: center;
`;

const PlayerWeight = styled.div`
  grid-area: weight;
  text-align: center;
`;

const PlayerFirstName = styled.div`
  max-height: 100%;
  margin: auto;
  display: inline-block;
`;

const PlayerLastName = styled.div`
  max-height: 100%;
  margin: auto;
  display: inline-block;
  padding-left: 10px;
`;

const TeamPlayers = ({ players, highlightPlayerInfo }) => (
  <FootballTableContainer>
    <LeagueTableHeader>
      <PlayerName>Name</PlayerName>
      <PlayerPosition>Position</PlayerPosition>
      <PlayerNationality>Nationality</PlayerNationality>
      <PlayerAge>Age</PlayerAge>
      <PlayerHeight>Height</PlayerHeight>
      <PlayerWeight>Weight</PlayerWeight>
    </LeagueTableHeader>
    <LeagueTable>
      {console.log(players)}
      {players.map((player) => (
        <LeagueTableRow
          key={player.player_id}
          onClick={() => highlightPlayerInfo(player.player_id)}
        >
          <PlayerName>
            <PlayerFirstName>{`${player.firstname[0]}.`}</PlayerFirstName>
            <PlayerLastName>{player.lastname}</PlayerLastName>
          </PlayerName>
          <PlayerPosition>{player.position}</PlayerPosition>
          <PlayerNationality>{player.nationality}</PlayerNationality>
          <PlayerAge>{player.age}</PlayerAge>
          <PlayerHeight>{player.height}</PlayerHeight>
          <PlayerWeight>{player.weight}</PlayerWeight>
        </LeagueTableRow>
      ))}
    </LeagueTable>
  </FootballTableContainer>
);

export default TeamPlayers;
