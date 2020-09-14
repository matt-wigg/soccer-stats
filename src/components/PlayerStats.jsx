import React from 'react';
import styled from 'styled-components';

const PlayerStatsContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
  min-width: 350px;
  border-radius: 4px;
  padding: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 367px;
  min-height: 367px;

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
  padding: 5px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: #fff;
  border-bottom: 1px solid #b2b2b2;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  min-width: 100%;
`;

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
  min-width: 350px;
  border-radius: 4px;
  padding: 5px;
`;

const ClubLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-height: auto;
  padding: 5px;
  padding-bottom: 10px;
`;

const ClubTable = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  border-top: 1px solid #f1f3f4;
  border-radius: 4px;
  padding: 5px;
`;

const ClubTableRowHead = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 700;
`;

const ClubTableRowBody = styled.div`
  display: flex;
  flex-flow: column;
`;

const PlayerStats = ({ playerHighlightInfo }) => (
  <PlayerStatsContainer>
    {playerHighlightInfo.map((player) => (
      <LeagueTable>
        {console.log(player)}
        <ClubTable>
          <ClubTableRowHead>Player</ClubTableRowHead>
          <ClubTableRowBody>{player.player_name}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Team</ClubTableRowHead>
          <ClubTableRowBody>{player.team_name}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Country</ClubTableRowHead>
          <ClubTableRowBody>{player.birth_country}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Goals</ClubTableRowHead>
          <ClubTableRowBody>{player.goals.total}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Games</ClubTableRowHead>
          <ClubTableRowBody>{player.games.appearences}</ClubTableRowBody>
        </ClubTable>
      </LeagueTable>
    ))}
  </PlayerStatsContainer>
);

export default PlayerStats;
