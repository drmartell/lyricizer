import React, { useState, useEffect } from 'react';
import useRequest from '../../hooks/useRequest';
import PropTypes from 'prop-types';
import Paging from '../home/Paging';
import handleIncrement from '../../utils/handleIncrement';
import handleDecrement from '../../utils/handleDecrement';

export default function Artist({ match: { params: { id } } }) {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { response: { releases }, loading, count } = useRequest(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&offset=${offset}`);

  useEffect(() => {
    setOffset((page - 1) * 25);
  }, [page]);

  if(loading) return <h1>loading</h1>;

  const albums = releases.map(({ 'cover-art-archive': coverArt, id, title }) => {
    const isArt = coverArt.front;
    const imageURL = isArt ? `http://coverartarchive.org/release/${id}/front` : 'https://avatars0.githubusercontent.com/u/49651717?s=400&v=4';
    
    return (
      <li key={id}>
        <figure>
          <img src={imageURL} />
          <figcaption>{title}</figcaption>
        </figure>
      </li>
    );
  });

  return (
    <>
      <Paging 
        onDecrement={() => handleDecrement(page, setPage)}
        onIncrement={() => handleIncrement(count, setPage)}
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
