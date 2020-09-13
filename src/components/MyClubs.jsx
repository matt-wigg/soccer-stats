import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeagueTable = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  background-color: #fff;
  max-height: 300px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`;

const LeagueTableRow = styled.div`
  display: flex;
  border-top: 1px solid #f1f3f4;
  cursor: pointer;
  font-weight: normal;
  padding: 5px;
  padding-top: 10px;

  &:hover {
    background-color: #f3f2f2;
  }
`;

const Club = styled.div`
  grid-area: club;
  display: inline-block;
  height: 20px;
  padding-left: 10px;
`;

const ClubRank = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: inline-block;
  width: 20px;
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
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: inline-block;
  padding-left: 10px;
  align-items: end;
  justify-content: end;
  width: 100px;
`;

const MyClubs = ({ myClubs, removeClubFromList, highlightClubInfo }) => (
  <LeagueTable>
    {console.log(myClubs)}
    <h2>My Clubs</h2>
    {myClubs.map((team, index) => (
      <LeagueTableRow key={team.team_id}>
        <Club onClick={() => highlightClubInfo(team.team_id)}>
          <ClubRank>{index + 1}</ClubRank>
          <ClubLogo src={team.logo} alt={team.teamName} />
          <ClubInfo>{team.teamName}</ClubInfo>
        </Club>
        <RemoveClub onClick={() => removeClubFromList(team.team_id)}>Remove</RemoveClub>
      </LeagueTableRow>
    ))}
  </LeagueTable>
);

export default MyClubs;
