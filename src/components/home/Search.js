import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onChange, onSubmit }) => (
<>
  <input type="text" placeholder="Search an artist" value={searchTerm} onChange={onChange} />
  <button onSubmit={}>Search</button>
</>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequir
}

export default Search;
