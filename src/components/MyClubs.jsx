import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
  overflow-y: scroll;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  max-height: 300px;
  min-width: 350px;
  height: 300px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #b2b2b2;
  }
`;

const LeagueTableRow = styled.div`
  display: grid;
  grid-template-areas:
    "club remove";
  grid-template-columns: 2fr 1fr;
  border-top: 1px solid #f1f3f4;
  cursor: pointer;
  font-weight: normal;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    background-color: #f3f2f2;
  }
`;

const LeagueTableHeader = styled.div`
  display: grid;
  background-color: #fff;
  grid-template-areas:
    "club remove";
  grid-template-columns: 2fr 1fr;
  border-top: 1px solid #f1f3f4;
  font-weight: normal;
  padding: 10px;
  font-weight: 700;
  border-bottom: 1px solid #b2b2b2;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const Club = styled.div`
  grid-area: club;
  display: inline-block;
  height: 20px;
  padding-left: 10px;
`;

const ClubLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
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

const RemoveClub = styled.div`
  grid-area: remove;
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  margin-right: 5px;
  color: #f44336;

  &:hover {
    background-color: #f44336;
    color: #fff;
  }
`;

const MyClubs = ({ myClubs, removeClubFromList, highlightClubInfo }) => (
  <section>
    {console.log(myClubs)}
    <LeagueTableHeader>
      <Club>My Clubs</Club>
    </LeagueTableHeader>
    <LeagueTable>
      {myClubs.map((team, index) => (
        <LeagueTableRow key={team.team_id}>
          <Club onClick={() => highlightClubInfo(team.team_id)}>
            <ClubLogo src={team.logo} alt={team.teamName} />
            <ClubInfo>{team.teamName}</ClubInfo>
          </Club>
          <RemoveClub onClick={() => removeClubFromList(team.team_id)}>Remove</RemoveClub>
        </LeagueTableRow>
      ))}
    </LeagueTable>
  </section>
);

export default MyClubs;
