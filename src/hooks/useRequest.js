import { useState, useEffect } from 'react';

const useRequest = url => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        setResponse(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  return { response, loading, error };
};

export default useRequest;
