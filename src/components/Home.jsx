import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import useFetchProducts from "../hooks/useFetchProduct";

const Home = () => {
  // custom hook to fetch data
  const { products, isLoading } = useFetchProducts();

  // search input
  const [searchTerm, setSearchTerm] = useState("");

  // sorting option
  const [sortOrder, setSortOrder] = useState("default");

  // filter based on search
  const searchedProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // copy filtered data to apply sorting
  let finalProducts = [...searchedProducts];

  // sorting logic
  if (sortOrder === "asc") {
    finalProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    finalProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "az") {
    finalProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "za") {
    finalProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 transition-colors duration-300">
      {/* Search and Sort Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700
                     bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                     placeholder-zinc-500 dark:placeholder-zinc-400 outline-none"
        />

        {/* Sort dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-auto px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700
                     bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                     cursor-pointer outline-none"
        >
          <option value="default">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="az">Name: A to Z</option>
          <option value="za">Name: Z to A</option>
        </select>
      </div>

      {/* Product grid */}
      <div
        className="grid gap-6
                   grid-cols-1
                   sm:grid-cols-2
                   md:grid-cols-3
                   lg:grid-cols-4
                   xl:grid-cols-5"
      >
        {isLoading ? (
          // shimmer while loading
          [...Array(10)].map((_, i) => <Shimmer key={i} />)
        ) : finalProducts.length > 0 ? (
          // render cards
          finalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          // no results found
          <p className="text-center text-zinc-500 dark:text-zinc-400 col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
