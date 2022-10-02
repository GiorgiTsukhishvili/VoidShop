import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CategoriesAndPricesProvider } from "./context/CategoriesAndPricesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CategoriesAndPricesProvider>
      <App />
    </CategoriesAndPricesProvider>
  </React.StrictMode>
);
