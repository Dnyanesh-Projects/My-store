import { Routes, Route } from "react-router-dom";
import ProductListing from "./ProductListing";
import Cart from "./Cart";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductListing />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;
