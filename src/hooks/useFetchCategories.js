import { useState, useEffect } from 'react';
import axios from 'axios';
import productStore from '../store/productStore';

export default function useFetchCategories(query, page, sortBy, limit=500) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const categories = productStore(state => state.categories);
  const emptyCategories = productStore(state => state.emptyCategories);
  const setCategories = productStore(state => state.setCategories);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    emptyCategories();
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `${import.meta.env.VITE_REACT_APP_API_URL}/product/categories`,
      params: {
        searchText: query,
        page,
        sortBy,
        limit
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      res.data.resuts = res.data.results.map((item) => item.name);
      setCategories(new Set(res.data.results));
      setHasMore(res.data.totalPages > page);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });

    return () => cancel();

  }, [query, page]);

  return { isLoading, categories, error, hasMore };
}