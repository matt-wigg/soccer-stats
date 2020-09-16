import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClubInfoContainer = styled.div`
  max-height: 365px;
`;

const ClubInfoTable = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  max-height: 366px;
  min-height: 366px;
  min-width: 350px;
  padding: 5px;
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

const ClubLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-height: auto;
  padding: 10px;
`;

const ClubTable = styled.div`
  border-radius: 4px;
  border-top: 1px solid #f1f3f4;
  display: grid;
  grid-template-columns: 100px 1fr;
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
      <ClubInfoTable key={team.team_id}>
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
      </ClubInfoTable>
    ))}
  </ClubInfoContainer>
);

ClubInfomation.propTypes = {
  teamHighlightInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ClubInfomation;
