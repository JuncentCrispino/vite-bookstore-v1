import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchOrders(page = 1, limit = 5, sortBy = null) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      url: `${import.meta.env.VITE_REACT_APP_API_URL}/order?limit=${limit}&page=${page}`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      console.log('res', res.data);
      setOrders(res.data);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });

    return () => cancel();

  }, [limit, page, sortBy]);

  return { isLoading, orders, error };
}