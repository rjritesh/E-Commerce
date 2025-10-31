import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

// lazy load product details for better performance
const ProductDetails = lazy(() => import("./components/ProductDetails"));

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-[Montserrat] flex flex-col transition-colors duration-300">
      {/* header section */}
      <Header />

      {/* main content area */}
      <main className="grow px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Suspense
          fallback={<h1 className="text-center mt-10 text-2xl">Loading...</h1>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </main>

      {/* footer section */}
      <Footer />

      {/* toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default App;
