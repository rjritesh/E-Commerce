import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-800 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              ShopVerse
            </h1>
          </div>

          {/* Right section cart */}
          <div className="flex items-center gap-4">


            {/* Cart Icon */}
            <button
              className="relative p-2 rounded-lg text-zinc-800 dark:text-white transition-colors duration-200"
              onClick={() => navigate("/cart")}
              aria-label="View cart"
            >
              <CgShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
