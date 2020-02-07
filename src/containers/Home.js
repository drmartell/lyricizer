import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import Search from '../components/home/Search';
import ArtistList from '../components/home/ArtistList';
import Paging from '../components/home/Paging';
import Header from '../components/Header';

const Home = () => {
  const [page, setPage] = useState(1);
  const { searchTerm, handleSearchTerm, handleButtonToggle, artists, count } = useSearch(page);
  

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
      <Header />
      <Search searchTerm={searchTerm}
        onChange={handleSearchTerm}
        onClick={handleButtonToggle} />
      <Paging
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        page={page}
        count={count}
      />
      <ArtistList artistArr={artists}/>
    </>
  );
};

export default Home;
