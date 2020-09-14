import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SearchCountry = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 350px;
  max-height: 300px;
  background-color: #fff;

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const SelectCountry = ({ countries, updateCountryLeagueList }) => (
  <SearchCountry>
    <Select
      label="Single select"
      options={countries}
      placeholder="Select Country"
      onChange={updateCountryLeagueList}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#00d4b1',
          primary: '#00d4b1',
        },
      })}
    />
  </SearchCountry>
);

export default SelectCountry;
