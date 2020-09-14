import React from 'react';
import styled from 'styled-components';

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
  min-width: 350px;
  border-radius: 4px;
  padding: 5px;
  overflow-y: scroll;
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
  <section>
    {teamHighlightInfo.map((team) => (
      <LeagueTable>
        <ClubLogo>
          <img src={team.logo} alt={team.teamName} width="125" />
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
  </section>
);

export default ClubInfomation;
