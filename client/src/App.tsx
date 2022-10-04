import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { CartPage, MainPage, OneProductPage } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<OneProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
