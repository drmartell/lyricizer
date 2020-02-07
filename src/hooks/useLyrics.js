import { useEffect, useState } from 'react';
import getLyrics from '../services/getLyrics.js';

export default function useLyrics(artistName, recordingName) {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    setLyrics(getLyrics(artistName, recordingName));
  };

  useEffect(() => {
    setLoading(true);
    fetch();
    (setLoading(false));
  });
  
  return { lyrics, loading };
}
