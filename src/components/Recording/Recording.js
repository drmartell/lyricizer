import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import useRecording from '../../hooks/useRecording';

export default function Recording({ match: { params: { id } }, location }) {
  const { artist } = queryString.parse(location.search);
  const { album, loading } = useRecording(id);

  const tracks = album.map(({ title, length }, i) => (
    <li key={i}>
      <span>title</span><span>length</span>
    </li>
  ));

  return (
    <>
      <h1>{artist}</h1>
      <ul>
        {tracks}
      </ul>
    </>
  );
}

Recording.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  location: PropTypes.objectOf(PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired).isRequired
};
