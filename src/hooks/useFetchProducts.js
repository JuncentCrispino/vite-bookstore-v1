import { useState, useEffect } from 'react';
import productStore from '../store/productStore';

export default function useFetchProducts() {
  const products = productStore(state => state.products);
  const setProducts = productStore(state => state.setProducts);
  const [totalResults, setTotalResults] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/product`).then(res => res.json());
      setProducts(data.results);
      setTotalResults(data.totalResults);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    }
    )();
  }, []);

  return { products, totalResults, totalPages, isLoading };
}