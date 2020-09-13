import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
  height: inherit;
  border-radius: 4px;
`;

const ClubLogo = styled.div`
  display: flex;
  min-height: 100px;
  padding: 5px;
  border-bottom: 1px solid #f1f3f4;
`;

const ClubTable = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  border-bottom: 1px solid #f1f3f4;
`;

const ClubTableRowHead = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5px;
  font-weight: 700;
`;

const ClubTableRowBody = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5px;
`;

const ClubInfomation = ({ teamHighlightInfo }) => (
  <section>
    {console.log(teamHighlightInfo)}
    {teamHighlightInfo.map((team) => (
      <LeagueTable>
        <ClubLogo>
          <img src={team.logo} alt={team.teamName} />
        </ClubLogo>
        <ClubTable>
          <ClubTableRowHead>Club</ClubTableRowHead>
          <ClubTableRowBody>{team.name}</ClubTableRowBody>
        </ClubTable>
        <ClubTable>
          <ClubTableRowHead>Country</ClubTableRowHead>
          <ClubTableRowBody>{team.country}</ClubTableRowBody>
        </ClubTable>

      </LeagueTable>
    ))}
  </section>
);

ClubInfomation.propTypes = {
  clubHighlight: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ClubInfomation;
