import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, isLoading };
};

export default useFetchProducts;
