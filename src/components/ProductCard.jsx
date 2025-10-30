import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden group border border-zinc-200 dark:border-zinc-700 w-[220px] sm:w-[250px]">

        {/* Product Image */}
        <div className="relative bg-zinc-100 dark:bg-zinc-700 h-[180px] flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Product Info */}
        <div className="p-3">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-1 line-clamp-2">
            {product.title}
          </h3>



          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <AiFillStar className="text-yellow-400 w-3.5 h-3.5" />
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              {product.rating?.rate}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              ({product.rating?.count})
            </span>
          </div>

          {/* Price + Add to Cart */}
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-blue-600 dark:text-blue-400">
              ${product.price}
            </span>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
              aria-label="Add to cart"
            >
              <CgShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
