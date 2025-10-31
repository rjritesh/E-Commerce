import React from "react";

const ProductDetailsShimmer = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-40 h-5 bg-zinc-300 dark:bg-zinc-700 rounded mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image box */}
          <div className="rounded-2xl p-3 shadow-lg flex justify-center items-center">
            <div className="w-full h-[500px] bg-zinc-300 dark:bg-zinc-700 rounded-lg"></div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="w-24 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-3"></div>
              <div className="w-3/4 h-8 bg-zinc-300 dark:bg-zinc-700 rounded mb-4"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="w-10 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                <div className="w-24 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              </div>

              <div className="w-32 h-8 bg-zinc-300 dark:bg-zinc-700 rounded mb-6"></div>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
              <div className="w-32 h-6 bg-zinc-300 dark:bg-zinc-700 rounded mb-3"></div>
              <div className="w-full h-20 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex justify-between">
                <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                <div className="w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              </div>

              <div className="w-full h-12 bg-zinc-300 dark:bg-zinc-700 rounded-xl mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsShimmer;
