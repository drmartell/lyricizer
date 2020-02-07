import { useState, useEffect } from 'react';

const useRequest = url => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setCount(json['release-count']);
        setResponse(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { response, loading, error, count };
};

export default useRequest;
