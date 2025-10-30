import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };

  const searchedProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let finalProducts = [...searchedProducts];
  if (sortOrder === "asc") {
    finalProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    finalProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 
                     bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 
                     placeholder-zinc-500 dark:placeholder-zinc-400"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 
                     bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 
                     mx-10"
        >
          <option value="default">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          [...Array(8)].map((_, i) => <Shimmer key={i} />)
        ) : finalProducts.length > 0 ? (
          finalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-zinc-500 dark:text-zinc-400 col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
