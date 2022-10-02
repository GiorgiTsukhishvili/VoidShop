import React from "react";
import { Navbar } from "./components";
import { useCategoriesAndPricesContext } from "./context/CategoriesAndPricesContext";

const App = () => {
  const { categories, currencies } = useCategoriesAndPricesContext();

  // console.log(categories, currencies);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
