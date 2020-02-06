import React from 'react';
import { useSearch } from '../hooks/useSearch';

const Home = () => {
  const { searchTerm, handleSearchTerm, handleButtonToggle, artists } = useSearch(page);

  return (
    <>
      <h1>This is the home Container</h1>
    </>
  );
};

export default Home;
