import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import Search from '../components/home/Search';

const Home = () => {
  const { searchTerm, handleSearchTerm, handleButtonToggle, artists } = useSearch(page);
  const [page, setPage] = useState(1);

  return (
    <>
      <Search searchTerm={searchTerm}
        onChange={handleSearchTerm}
        onClick={handleButtonToggle} />
    </>
  );
};

export default Home;
