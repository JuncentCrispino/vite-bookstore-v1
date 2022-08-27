import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchProducts(query, page, sortBy) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setProducts([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `${import.meta.env.VITE_REACT_APP_API_URL}/product`,
      params: {
        searchText: query,
        page,
        sortBy,
        limit: 20
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setProducts(prevProducts => {
        prevProducts.map((firstObj) => {
          res.data.results.map((compareObj, i) => {
            if (firstObj._id === compareObj._id) {
              res.data.results.splice(i, 1);
            }
          });
        });
        return [...prevProducts, ...res.data.results];
      });
      setHasMore(res.data.totalPages > page);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });

    return () => cancel();

  }, [query, page]);

  return { isLoading, products, error, hasMore };
}