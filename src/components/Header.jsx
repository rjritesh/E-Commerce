import React from 'react'
import { BiStore } from 'react-icons/bi'
import { CgShoppingCart } from 'react-icons/cg'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-800 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer group"
          >
          
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              ShopVerse
            </h1>
          </div>

          <div className="flex items-center gap-4">
        

            <button

              className="relative p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              aria-label="View cart"
            >
              <CgShoppingCart className="w-5 h-5" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                1
              </span>

            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header