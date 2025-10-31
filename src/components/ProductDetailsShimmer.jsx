import React from "react";

const ProductDetailsShimmer = () => {
  return (
    // Whole page container with background and shimmer animation
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300 animate-pulse">
      {/* Page content wrapper with proper padding for all screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Fake heading bar shimmer */}
        <div className="w-40 h-5 bg-zinc-300 dark:bg-zinc-700 rounded mb-10"></div>

        {/* Grid layout for image and product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left side - product image section */}
          <div className="rounded-2xl p-3 shadow-lg flex justify-center items-center">
            {/* Shimmer box for image placeholder */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-zinc-300 dark:bg-zinc-700 rounded-lg"></div>
          </div>

          {/* Right side - product details section */}
          <div className="flex flex-col justify-between space-y-6 mt-6 lg:mt-0">
            
            {/* Top details - title, rating, etc. */}
            <div>
              <div className="w-24 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-3"></div>
              <div className="w-3/4 h-8 bg-zinc-300 dark:bg-zinc-700 rounded mb-4"></div>

              {/* Fake rating stars and count */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="w-10 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                <div className="w-24 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              </div>

              {/* Fake price shimmer */}
              <div className="w-32 h-8 bg-zinc-300 dark:bg-zinc-700 rounded mb-6"></div>
            </div>

            {/* Middle section - fake description shimmer */}
            <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
              <div className="w-32 h-6 bg-zinc-300 dark:bg-zinc-700 rounded mb-3"></div>
              <div className="w-full h-20 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
            </div>

            {/* Bottom section - fake info cards and add to cart shimmer */}
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
              {/* Two-column shimmer rows */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                  <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                </div>
              ))}

              {/* Shimmer button at the bottom */}
              <div className="w-full h-12 bg-zinc-300 dark:bg-zinc-700 rounded-xl mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsShimmer;
