import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { toast } from "react-toastify";
import { useFetchProductDetails } from "../hooks/useFetchProductDetails";
import ProductDetailsShimmer from "./ProductDetailsShimmer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading } = useFetchProductDetails(id);

  // Show shimmer loader while data is loading
  if (loading) return <ProductDetailsShimmer />;

  return (
    // Main container for full page
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      {/* Content wrapper for proper spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 
                     hover:text-blue-600 dark:hover:text-blue-400 mb-8 
                     transition-all duration-200 group cursor-pointer"
        >
          <IoArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Products
        </button>

        {/* Grid for image and details section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* Product Image section */}
          <div className="rounded-2xl p-4 shadow-lg flex justify-center items-center 
                          bg-white dark:bg-zinc-800">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-[400px] sm:max-w-[500px] object-contain 
                         max-h-[450px] sm:max-h-[500px] rounded-lg"
            />
          </div>

          {/* Right section: Details */}
          <div className="flex flex-col justify-between space-y-6">

            {/* Product title, rating and price */}
            <div>
              {/* Category badge */}
              <span className="inline-block px-3 py-1  border border-gray-50
                               text-white text-sm font-medium rounded-full mb-3">
                {product.category?.charAt(0).toUpperCase() + product.category?.slice(1)}
              </span>

              {/* Product name */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 
                             dark:text-white leading-tight mb-4">
                {product.title}
              </h1>

              {/* Ratings */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <span className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white">
                  {product.rating?.rate}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
                  ({product.rating?.count} reviews)
                </span>
              </div>

              {/* Product price */}
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Product description */}
            <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
              <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Description
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Extra details + Add to Cart */}
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-zinc-600 dark:text-zinc-400">Category</span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-zinc-600 dark:text-zinc-400">Rating</span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {product.rating?.rate} / 5.0
                </span>
              </div>

              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-zinc-600 dark:text-zinc-400">Reviews</span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {product.rating?.count}
                </span>
              </div>

              {/* Add to cart button */}
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  toast.success("Item added to cart!");
                }}
                className="w-full mt-4 bg-linear-to-r from-blue-600 to-indigo-600 
                           hover:from-blue-700 hover:to-indigo-700 text-white 
                           font-medium py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
