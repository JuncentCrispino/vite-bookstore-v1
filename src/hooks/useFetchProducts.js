import { useState, useEffect } from 'react';
import axios from 'axios';
import productStore from '../store/productStore';

export default function useFetchProducts(query = '', page = 1, sortBy = '', category = '') {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const products = productStore(state => state.products);
  const setProducts = productStore(state => state.setProducts);
  const totalPages = productStore(state => state.totalPages);
  const setTotalPages = productStore(state => state.setTotalPages);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `${import.meta.env.VITE_REACT_APP_API_URL}/product`,
      params: {
        searchText: query,
        category,
        page,
        sortBy,
        limit: 10
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setProducts(res.data.results);
      setTotalPages(res.data.totalPages);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });

    return () => cancel();

  }, [query, page, category]);

  return { isLoading, products, error, totalPages };
}