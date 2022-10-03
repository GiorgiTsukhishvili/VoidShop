import React, { useState, useEffect } from "react";
import { Products } from "../components";
import { useCategoriesAndPricesContext } from "../context/CategoriesAndPricesContext";
import * as api from "./../api";
import { v4 } from "uuid";
import { MainPageItems } from "./pagesInterfaces/mainPageInterface";

const MainPage = () => {
  const [items, setItems] = useState<MainPageItems[]>([]);
  const { chosenCategory } = useCategoriesAndPricesContext();

  useEffect(() => {
    const getItems = async () => {
      const { data } = await api.getAllItems();

      const chosenItems = data.data.items.filter((item: MainPageItems) =>
        chosenCategory === "all" ? item : item.category === chosenCategory
      );

      setItems(chosenItems);
    };

    getItems();
  }, [chosenCategory]);

  return (
    <div className="mt-[160px] mb-[191px] text-[#1d1f22]">
      <div className="ml-[100px] flex gap-[30px]">
        <h1 className=" font-normal text-[42px] leading-[160%]">
          Category:{" "}
          {chosenCategory &&
            chosenCategory.charAt(0).toUpperCase() + chosenCategory.slice(1)}
        </h1>
      </div>

      <div className="my-[100px] mr-[100px] flex flex-wrap gap-[5%] items-center justify-start">
        {items.length > 0 &&
          items.map((item) => <Products key={v4()} product={item} />)}
      </div>
    </div>
  );
};

export default MainPage;
