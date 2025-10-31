import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

  return (
    // Card links to the product details page
    <Link to={`/product/${product.id}`}>
      {/* Main card box */}
      <div
        className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md 
                   transition-all duration-200 cursor-pointer overflow-hidden group 
                   border border-zinc-200 dark:border-zinc-700 
                   w-full sm:w-[220px] md:w-60 lg:w-[250px] 
                   flex flex-col min-h-[340px]" // ensures all cards same height
      >

        {/* Image container */}
        <div className="relative bg-zinc-100 dark:bg-zinc-700 
                        h-40 sm:h-[180px] md:h-[200px] 
                        flex items-center justify-center overflow-hidden">

          {/* Category tag on top */}
          <span className="absolute  top-2 left-2 z-1 border border-gray-50
                          text-white  bg-zinc-700
                          text-[10px] sm:text-xs font-sm 
                          px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-auto object-contain 
                       group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Product info */}
        <div className="p-3 flex flex-col grow">
          {/* Product name */}
          <h3 className="text-md sm:text-base font-medium text-zinc-900 dark:text-white mb-1 line-clamp-2 min-h-10">
            {product.title}
          </h3>

          {/* Rating section */}
          <div className="flex items-center gap-1 mb-2">
            <AiFillStar className="text-yellow-400 w-3.5 h-3.5" />
            <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {product.rating?.rate}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              ({product.rating?.count})
            </span>
          </div>

          {/* Price section */}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm sm:text-base font-bold text-blue-00 dark:text-blue-400">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
