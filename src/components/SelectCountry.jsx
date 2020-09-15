import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';

const SearchCountry = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-flow: column;
  max-height: 300px;
  min-width: 350px;
`;

const SelectCountry = ({ countries, updateCountryLeagueList }) => (
  <SearchCountry>
    <Select
      label="Single select"
      options={countries}
      placeholder="Select Country"
      onChange={updateCountryLeagueList}
      theme={(theme) => ({
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

SelectCountry.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCountryLeagueList: PropTypes.func.isRequired,
};

export default SelectCountry;
