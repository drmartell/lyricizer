import React from 'react';
import useRequest from '../../hooks/useRequest';
import PropTypes from 'prop-types';
import Header from '../Header';


export default function Artist({ match }) {
  const { response, loading } = useRequest(`http://musicbrainz.org/ws/2/release?artist=${match.params.id}&fmt=json`);

  if(loading) return <h1>loading</h1>;

  const albums = response.releases.map(album => {
    return (
      <li key={album.id}>
        <img src={`http://coverartarchive.org/release/${album.id}/front`} />
        <span>{album.title}</span>
      </li>
    );
  });
  return (
    <>
      <Header />
      <ul>
        {albums}
      </ul>
    </>
  );
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
;
