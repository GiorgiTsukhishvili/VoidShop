import React from "react";
import { useCategoriesAndPricesContext } from "./context/CategoriesAndPricesContext";

const App = () => {
  const { categories, currencies } = useCategoriesAndPricesContext();

  console.log(categories, currencies);

  return <div>App</div>;
};

export default App;
