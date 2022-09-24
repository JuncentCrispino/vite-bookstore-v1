import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchBook(book) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [bookDtls, setBookDtbookDtls] = useState();

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `${import.meta.env.VITE_REACT_APP_API_URL}/product/${book}`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setBookDtbookDtls(res.data);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });

    return () => cancel();

  }, [book]);

  return { isLoading, bookDtls, error };
}