import { useState, useEffect } from 'react';

export default function useGet(url, tokenName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [error, setError] = useState(null);
  console.log(url);
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(tokenName)}`
      }
    })
      .then((res) => {
        setStatusCode(res.status);
        console.log(res.status);
      })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      }).catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error, statusCode };
}