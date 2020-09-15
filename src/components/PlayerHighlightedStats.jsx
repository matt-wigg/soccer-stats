import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerStatsContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  max-height: 367px;
  min-height: 367px;
  min-width: 350px;
  padding: 5px;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00d4b1;
    border: 1px solid #f1f3f4;
    border-radius: 4px;
  }
`;

const PlayerStatsTableContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  min-width: 350px;
  padding: 5px;
`;

const PlayerStatsTable = styled.div`
  border-bottom: 1px solid #f1f3f4;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 150px 1fr;
  padding: 5px;
`;

const PlayerStatsTableRowHead = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 700;
`;

const PlayerStatsTableRowBody = styled.div`
  display: flex;
  flex-flow: column;
`;

const PlayerStats = ({ playerHighlightInfo }) => (
  <PlayerStatsContainer>
    {playerHighlightInfo.map((player) => (
      <PlayerStatsTableContainer key={player.player_id + player.league_id}>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Name</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.player_name}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Club</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.team_name}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Rating</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>
            {player.rating ? Number(player.rating).toFixed(2) : 'N/A'}
          </PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Position</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.position}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Apperances</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.games.appearences}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Minutes Played</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.games.minutes_played}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Goals</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.goals.total}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Passes</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.passes.total}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Pass Accuracy</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.passes.accuracy}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Yellow Cards</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.cards.yellow}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
        <PlayerStatsTable>
          <PlayerStatsTableRowHead>Red Cards</PlayerStatsTableRowHead>
          <PlayerStatsTableRowBody>{player.cards.red}</PlayerStatsTableRowBody>
        </PlayerStatsTable>
      </PlayerStatsTableContainer>
    ))}
  </PlayerStatsContainer>
);

PlayerStats.propTypes = {
  playerHighlightInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlayerStats;
