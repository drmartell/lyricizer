import React from 'react';
import PropTypes from 'prop-types';

const ArtistItem = ({ name }) => (
  <section>
    <h2>{name}</h2>
  </section>
);

ArtistItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ArtistItem;
