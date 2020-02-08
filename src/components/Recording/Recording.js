import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { useRecording } from '../../hooks/useRecording';
import { Link } from 'react-router-dom';
export default function Recording({ match: { params: { id } }, location }) {
  const { artist } = queryString.parse(location.search);
  const { album, loading } = useRecording(id);

  if(loading) return <h1>loading</h1>;
  
  const tracks = album.map(({ title, length }, i) => <li key={i}>
    <Link to={`/lyrics?artist=${artist}&title=${encodeURIComponent(title.replace(/\.+/g, ''))}`}>
      <span>{title}</span><span>{length}</span>
    </Link>
  </li>);
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
  location: PropTypes.shape(PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired).isRequired
};
