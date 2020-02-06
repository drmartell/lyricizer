import { useState, useEffect } from 'react';

export const useSearch = page => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [buttonToggle, setButtonToggle] = useState(true);
  
  const handleSearchTerm = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleButtonToggle = () => {
    setButtonToggle(state => !state);
  };

  useEffect(() => {
    getArtists(searchTerm)
      .then(setArtists);
  }, [page, buttonToggle]);

  return { searchTerm, handleSearchTerm, handleButtonToggle, artists };
};
