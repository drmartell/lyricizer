import React from 'react';
import useLyrics from '../../hooks/useLyrics.js';
import queryString from 'query-string';
import PropTypes from 'prop-types';

export default function Lyrics({ location }) {
  const { artist, title } = queryString.parse(location.search);
  const { lyrics, loading } = useLyrics(artist, title);


  return (
    <p>
      {lyrics}
    </p>
  );
}
