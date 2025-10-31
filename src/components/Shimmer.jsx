import React from "react";

const Shimmer = () => {
  return (
    // Main card box for shimmer loading effect
    <div className="relative bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 w-[220px] sm:w-[250px] overflow-hidden">

      {/* Shimmer moving light effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

      {/* Placeholder for product image */}
      <div className="bg-zinc-200 dark:bg-zinc-700 h-[180px] w-full mb-3" />

      {/* Placeholder for product details like title, price etc */}
      <div className="px-3 pb-3 space-y-2">
        {/* Fake title line */}
        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />

        {/* Fake subtitle line */}
        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2" />

        {/* Fake price line */}
        <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-1/3" />
      </div>
    </div>
  );
};

export default Shimmer;
