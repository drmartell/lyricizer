import { useState } from 'react';

export const useOffset = () => {
  const [page, setPage] = useState(0);

  const handleIncrement = () => {
    setPage(page => (page - 1) * 25);
  }; 
  
  return { page, handleIncrement };
};
