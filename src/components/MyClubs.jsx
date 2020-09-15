import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyClubContainer = styled.div`
  max-height: 365px;
`;

const MyClubTable = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-flow: column;
  height: 295px;
  max-height: 300px;
  min-width: 350px;
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

const MyClubTableRow = styled.div`
  border-bottom: 1px solid #f1f3f4;
  cursor: pointer;
  display: grid;
  font-weight: normal;
  grid-template-areas:
    "club remove";
  grid-template-columns: 2fr 1fr;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    background-color: #00d4b1;
  }
`;

const MyClubHeader = styled.div`
  background-color: #fff;
  border-top: 1px solid #f1f3f4;
  border-bottom: 1px solid #b2b2b2;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: grid;
  font-weight: 700;
  grid-template-areas:
    "club remove";
  grid-template-columns: 2fr 1fr;
  padding: 10px;
`;

const ClubInfoContainer = styled.div`
  display: inline-block;
  grid-area: club;
  height: 25px;
  padding-left: 10px;
`;

const ClubLogo = styled.img`
  display: inline-block;
  max-height: 100%;
  max-width: 100%;
  padding-left: 10px;
`;

const ClubInfo = styled.div`
  display: inline-block;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  padding-left: 10px;
  vertical-align: top;
`;

const RemoveClub = styled.div`
  background-color: #3f1052;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  grid-area: remove;
  margin-right: 5px;
  max-height: 100%;
  max-width: 100%;
  text-align: center;
  transition: background-color .05s cubic-bezier(.65,.05,.36,1);

  &:hover {
    background-color: #cb1d10;
    color: #fff;
    transition-duration: 0s, 0s, .05s;
  }
`;

const MyClubs = ({ myClubs, removeClubFromList, highlightClubInfo }) => (
  <MyClubContainer>
    <MyClubHeader>
      <ClubInfoContainer>My Clubs</ClubInfoContainer>
    </MyClubHeader>
    <MyClubTable>
      {myClubs.map((team) => (
        <MyClubTableRow key={team.team_id}>
          <ClubInfoContainer onClick={() => highlightClubInfo(team.team_id)}>
            <ClubLogo src={team.logo} alt={team.teamName} />
            <ClubInfo>{team.teamName}</ClubInfo>
          </ClubInfoContainer>
          <RemoveClub onClick={() => removeClubFromList(team.team_id)}>Remove</RemoveClub>
        </MyClubTableRow>
      ))}
    </MyClubTable>
  </MyClubContainer>
);

MyClubs.propTypes = {
  myClubs: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeClubFromList: PropTypes.func.isRequired,
  highlightClubInfo: PropTypes.func.isRequired,
};

export default MyClubs;
