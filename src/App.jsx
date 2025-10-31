import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// lazy loading product details page for better performance
const ProductDetails = lazy(() => import("./components/ProductDetails"));

const App = () => {
  return (
    // main app container with background and text color
    <div className="bg-zinc-900 min-h-screen text-white font-[Montserrat] transition-colors duration-300">
      {/* header section */}
      <Header />

      {/* toast notification container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />

      {/* main content area for all routes */}
      <main className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* suspense used to show fallback while lazy components load */}
        <Suspense
          fallback={<h1 className="text-center mt-10 text-2xl">Loading...</h1>}
        >
          <Routes>
            {/* home page route */}
            <Route path="/" element={<Home />} />

            {/* cart page route */}
            <Route path="/cart" element={<CartPage />} />

            {/* single product details route */}
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
