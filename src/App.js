import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigate />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route index element={<Phone />} />
        <Route path="Phone" element={<Laptop />} />
      </Routes>
      <Home />
      <About />
      <Product />
    </div>
  );
}
