import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClubInfoContainer = styled.div`
  max-height: 365px;
`;

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
  min-width: 350px;
  max-height: 366px;
  min-height: 366px;
  border-radius: 4px;
  padding: 5px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    border: 1px solid #f1f3f4;
    background-color: #00d4b1;
  }
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

const ClubInfomation = ({ teamHighlightInfo }) => (
  <ClubInfoContainer>
    {teamHighlightInfo.map((team) => (
      <LeagueTable key={team.team_id}>
        <ClubLogo>
          <img src={team.logo} alt={team.teamName} width="115" />
        </ClubLogo>
        <ClubTable>
          <ClubTableRowHead>Club</ClubTableRowHead>
          <ClubTableRowBody>{team.name}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Founded</ClubTableRowHead>
          <ClubTableRowBody>{team.founded}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Country</ClubTableRowHead>
          <ClubTableRowBody>{team.country}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>City</ClubTableRowHead>
          <ClubTableRowBody>{team.venue_city}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Stadium</ClubTableRowHead>
          <ClubTableRowBody>{team.venue_name}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Capacity</ClubTableRowHead>
          <ClubTableRowBody>{team.venue_capacity}</ClubTableRowBody>
        </ClubTable>
      </LeagueTable>
    ))}
  </ClubInfoContainer>
);

ClubInfomation.propTypes = {
  teamHighlightInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ClubInfomation;
