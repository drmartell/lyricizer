import React, { useState, useEffect } from 'react';
import useRequest from '../../hooks/useRequest';
import PropTypes from 'prop-types';
import Paging from '../home/Paging';


export default function Artist({ match }) {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { response, loading, count } = useRequest(`http://musicbrainz.org/ws/2/release?artist=${match.params.id}&fmt=json&offset=${offset}`);

  useEffect(() => {
    setOffset((page - 1) * 25);
  }, [page]);

  if(loading) return <h1>loading</h1>;

  const albums = response.releases.map(album => {
    if(album['cover-art-archive'].front) return (
      <li key={album.id}>
        <img src={`http://coverartarchive.org/release/${album.id}/front`} />
        <span>{album.title}</span>
      </li>
    );

    return (
      <li key={album.id}>
        <img src={'https://avatars0.githubusercontent.com/u/49651717?s=400&v=4'} />
        <span>{album.title}</span>
      </li>
    );
  });

  const handleIncrement = () => {
    const maxPageNum = Math.floor(count / 25);
    setPage(page => Math.min(page + 1, maxPageNum));
  };

  const handleDecrement = () => {
    if(page <= 1) return;
    setPage(page => page - 1);
  };

  return (
    <>
      <Paging 
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        page={page}
        count={count}
      />
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
};
