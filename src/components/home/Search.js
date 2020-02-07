import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onChange, onClick }) => (
  <>
    <input type="text" placeholder="Search an artist" 
      value={searchTerm} 
      onChange={onChange} 
      onKeyDown={(e) => onKeyDown(e, onClick)} />
    <button onClick={onClick}>Search</button>
  </>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

function onKeyDown(e, func){
  if(e.key === 'Enter') func();
}

export default Search;
