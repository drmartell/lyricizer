import { useState, useEffect } from 'react';
import getRecordings from '../services/getRecordings';

export const useRecording = id => {
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRecordings(id)
      .then(setAlbum)
      .finally(setLoading(false));
  }, [id]);

  return { album, loading };
};
