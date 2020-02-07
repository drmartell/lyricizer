import React from 'react';
import { Link } from 'react-router-dom';
import ArtistItem from './ArtistsItem';
import PropTypes from 'prop-types';

const ArtistList = ({ artistArr }) => {
  const artistsElements = artistArr.map(artist =>
    <li key={artist.id}>
      <Link to={`/artist/${artist.id}`}>
        <ArtistItem name={artist.name} />
      </Link>
    </li>
  );

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
