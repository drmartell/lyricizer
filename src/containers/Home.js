import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import Search from '../components/home/Search';
import ArtistList from '../components/home/ArtistList';
import Paging from '../components/home/Paging';
import handleIncrement from '../utils/handleIncrement';
import handleDecrement from '../utils/handleDecrement';

const Home = () => {
  const [page, setPage] = useState(1);
  const { searchTerm, handleSearchTerm, handleButtonToggle, artists, count } = useSearch(page);

  return (
    <>
      <Search
        searchTerm={searchTerm}
        onChange={handleSearchTerm}
        onClick={handleButtonToggle} />
      <Paging
        onDecrement={() => handleDecrement(page, setPage)}
        onIncrement={() => handleIncrement(count, setPage)}
        page={page}
        count={count} />
      <ArtistList
        artistArr={artists} />
    </>
  );
};

export default Home;
