import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FixturesTable = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  max-height: 400px;
  max-width: 850px;
  flex-wrap: wrap;
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
  font-weight: 700;
  max-width: 850px;
  padding: 5px;
  padding-top: 10px;
  background-color: #fff;
  border-bottom: 1px solid #b2b2b2;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const FixtureContainer = styled.div`
  border: 1px solid #f1f3f4;
  width: 100%;
  min-height: 200px;
  cursor: pointer;
  padding: 5px;
  background-color: #fff;
  display: grid;
  grid-template-areas:
    "teamOne vs teamTwo"
    "teamOne date teamTwo";

  align-content: center;
  justify-content: space-around;

  &:hover {
    background-color: #00d4b1;
  }
`;

const TeamOne = styled.div`
  grid-area: teamOne;
`;

const TeamTwo = styled.div`
  grid-area: teamTwo;
`;

const VS = styled.div`
  grid-area: vs;
`;

const Date = styled.div`
  grid-area: date
`;

const Club = styled.div`
  grid-area: club;
  display: inline-block;
  height: 20px;
  padding-left: 10px;
`;

const TeamStats = ({ standings }) => (
  <section>
    <LeagueTableHeader>
      <Club>Fixtures</Club>
    </LeagueTableHeader>
    <FixturesTable>
      {standings.map((team) => (
        <FixtureContainer>
          <TeamOne>Leeds</TeamOne>
          <VS>VS</VS>
          <Date>DATE</Date>
          <TeamTwo>Leeds</TeamTwo>
        </FixtureContainer>
      ))}
    </FixturesTable>
  </section>
);

TeamStats.propTypes = {
  standings: PropTypes.arrayOf(PropTypes.object).isRequired,
  addClubToList: PropTypes.func.isRequired,

};

export default TeamStats;
