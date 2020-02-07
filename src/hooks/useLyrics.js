import { useEffect, useState } from 'react';
import getLyrics from '../services/getLyrics.js';

export default function useLyrics(artistName, recordingName) {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getLyrics(artistName, recordingName)
      .then(setLyrics)
      .finally(setLoading(false));
  });
  
  return { lyrics, loading };
}
