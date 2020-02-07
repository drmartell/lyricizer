import React from 'react';
import { Link } from 'react-router-dom';
import ArtistItem from './ArtistsItem';
import PropTypes from 'prop-types';

const ArtistList = ({ artistArr }) => {
  const artistsElements = artistArr.map(({ name, id }) => <li key={id}>
    <Link to={`/artist/${id}?artist=${encodeURIComponent(name.replace(/\.+/g, ''))}`}>
      <ArtistItem name={name} />
    </Link>
  </li>);

  return (
    <ul>
      {artistsElements}
    </ul>
  );
};

ArtistList.propTypes = {
  artistArr: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default ArtistList;
