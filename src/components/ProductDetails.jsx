import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <h1 className="text-white text-center mt-10 text-2xl">Loading...</h1>
    );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors duration-200 group cursor-pointer"
        >
          <IoArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200 " />
          Back to Products
        </button>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image section */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-lg flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Info section */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
                {product.category?.charAt(0).toUpperCase() +
                  product.category?.slice(1)}
              </span>

              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <FaStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {product.rating?.rate}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">
                    ({product.rating?.count} reviews)
                  </span>
                </div>
              </div>

              <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                ${product.price}
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Description
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Extra Info */}
            <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Category
                </span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Rating
                </span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {product.rating?.rate} / 5.0
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Reviews
                </span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {product.rating?.count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
