import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'

const ProductCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden group border border-gray-200 dark:border-gray-700 w-[180px] sm:w-[200px]">
      <div className="relative bg-gray-100 dark:bg-gray-700 h-[180px] flex items-center justify-center overflow-hidden">
        <img
          src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR42bnuQMK1AVP9zv4gw55foBS8aPt6VMCpAiQ8FiBluyjGjYagMyP2t9vpfkP96L9y7zaQ1hALA_Xrbu1VVzA-U3gRz5pclqqsNl29LReT"
          alt="Classic Men's Backpack"
          className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
        />
     
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1 line-clamp-2">
          Classic Men's Backpack with Stylish Design
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <AiFillStar className="text-yellow-400 w-3.5 h-3.5" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            4.6
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">(220)</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-blue-600 dark:text-blue-400">
            $45.99
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
  )
}

export default ProductCard
