import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CategoriesAndPricesProvider } from "./context/CategoriesAndPricesContext";
import { CartItemsProvider } from "./context/CartItemsContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CategoriesAndPricesProvider>
      <CartItemsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartItemsProvider>
    </CategoriesAndPricesProvider>
  </React.StrictMode>
);
