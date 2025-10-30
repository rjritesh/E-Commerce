import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const ProductDetails = lazy(() => import("./components/ProductDetails"));

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Header />
      <Suspense fallback={<h1 className="text-center mt-10 text-2xl">waitttt</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
