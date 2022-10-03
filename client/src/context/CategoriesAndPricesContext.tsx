import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as api from "./../api";
import {
  CategoriesAndPricesContextInterface,
  CurrencyInterface,
} from "./contextInterfaces/CategoriesAndPricesInterface";

const CategoriesAndPricesContext = createContext(
  {} as CategoriesAndPricesContextInterface
);

export const CategoriesAndPricesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [currencies, setCurrencies] = useState<CurrencyInterface[]>([]);
  const [chosenSymbol, setChosenSymbol] = useState<string>("$");
  const [chosenCategory, setChosenCategory] = useState<string>("all");

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.getCategoriesAndPrices();

      setCategories(data.data.categories[0].category);
      setCurrencies(data.data.categories[0].prices);
    };

    getData();
  }, []);

  return (
    <CategoriesAndPricesContext.Provider
      value={{
        categories,
        currencies,
        chosenSymbol,
        setChosenSymbol,
        chosenCategory,
        setChosenCategory,
      }}
    >
      {children}
    </CategoriesAndPricesContext.Provider>
  );
};

export const useCategoriesAndPricesContext = () =>
  useContext(CategoriesAndPricesContext);
