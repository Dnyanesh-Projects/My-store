import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Set ProductListing as the default home page */}
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
