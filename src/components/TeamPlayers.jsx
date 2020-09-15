import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TeamPlayersContainer = styled.div`
  max-height: 300px;
  width: 100%;
`;

const TeamPlayersTabelContainer = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-flow: column;
  max-height: 325px;
  min-width: 100%;
  overflow-x: hidden;

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

const TeamPlayersTabelHeader = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #b2b2b2;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: grid;
  font-weight: 700;
  grid-template-areas:
    "name position nationality age height weight";
  grid-template-columns: 3fr 2fr 2fr 1fr 1fr 1fr;
  min-width: 100%;
  padding: 5px;
  padding-top: 10px;
`;

const TeamPlayersTabelRow = styled.div`
  background-color: #fff;
  border-top: 1px solid #f1f3f4;
  cursor: pointer;
  display: grid;
  font-weight: 400;
  grid-template-areas:
    "name position nationality age height weight";
  grid-template-columns: 3fr 2fr 2fr 1fr 1fr 1fr;
  padding: 5px;

  &:hover {
    background-color: #00d4b1;
  }
`;

const PlayerName = styled.div`
  display: inline-block;
  grid-area: name;
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
  display: inline-block;
  margin: auto;
  max-height: 100%;
`;

const PlayerLastName = styled.div`
  display: inline-block;
  margin: auto;
  max-height: 100%;
  padding-left: 10px;
`;

const TeamPlayers = ({ players, highlightPlayerInfo }) => (
  <TeamPlayersContainer>
    <TeamPlayersTabelHeader>
      <PlayerName>Name</PlayerName>
      <PlayerPosition>Position</PlayerPosition>
      <PlayerNationality>Nationality</PlayerNationality>
      <PlayerAge>Age</PlayerAge>
      <PlayerHeight>Height</PlayerHeight>
      <PlayerWeight>Weight</PlayerWeight>
    </TeamPlayersTabelHeader>
    <TeamPlayersTabelContainer>
      {players.map((player) => (
        <TeamPlayersTabelRow
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
        </TeamPlayersTabelRow>
      ))}
    </TeamPlayersTabelContainer>
  </TeamPlayersContainer>
);

TeamPlayers.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  highlightPlayerInfo: PropTypes.func.isRequired,
};

export default TeamPlayers;
