import { useState, useEffect } from 'react';
import { getArtists } from '../services/getArtists';

const useSearch = (page) => {
  const [searchTerm, setSearchTerm] = useState('Rick Astley');
  const [artists, setArtists] = useState([]);
  const [buttonToggle, setButtonToggle] = useState(true);
  const [count, setCount] = useState(0);

  const getOffSet = (page) => {
    return ((page - 1) * 25);
  };
  
  const handleSearchTerm = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleButtonToggle = () => {
    setButtonToggle(state => !state);
  };

  useEffect(() => {
    const offSet = getOffSet(page);
    getArtists(searchTerm, offSet)
      .then(res => {
        setArtists(res.artists);
        setCount(res.count);
      });
  }, [page, buttonToggle]);

  return { searchTerm, handleSearchTerm, handleButtonToggle, artists, count };
};

export default useSearch;
