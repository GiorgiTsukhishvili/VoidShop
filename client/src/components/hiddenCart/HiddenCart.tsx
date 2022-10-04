import React from "react";
import { useCartItemsContext } from "../../context/CartItemsContext";
import { useCategoriesAndPricesContext } from "../../context/CategoriesAndPricesContext";
import { HiddenCartprops } from "./hiddenCartInterface";
import { v4 } from "uuid";

import AddButton from "./../../assets/svg/plus-square-small.svg";
import RemoveButton from "./../../assets/svg/minus-square-small.svg";

const HiddenCart = ({ hide }: HiddenCartprops) => {
  const { savedItems } = useCartItemsContext();
  const { chosenSymbol } = useCategoriesAndPricesContext();

  const totalItems = savedItems.reduce(
    (total, item) => total + item.amount!,
    0
  );

  const totalItemsPrice = Math.floor(
    savedItems.reduce(
      (total, item) =>
        total +
        item.amount! *
          item.prices.filter((item) => item.currency.symbol === chosenSymbol)[0]
            .amount,
      0
    )
  ).toFixed(2);

  return (
    <div className="absolute">
      <div
        className="absolute w-[100vw] z-1 h-[100vh] bg-[rgba(0,0,0,0.3)] left-0 top-[32px]"
        onClick={() => hide(false)}
      ></div>
      <div className="min-w-[325px] h-[677px] bg-white z-5 fixed top-[50px] right-[50px] py-[32px] px-[16px]">
        <h1 className="text-[16px] leading-[160%] font-bold mb-[32px]">
          My Bag, <span className="font-medium">{savedItems.length} items</span>
        </h1>
        <div>
          <div className=" h-[450px] overflow-y-auto">
            {savedItems.map((item) => (
              <div key={v4()} className="w-full flex justify-between">
                <div>
                  <h1 className="text-[16px] leading-[160%] font-light">
                    {item.brand}
                  </h1>
                  <h1 className="text-[16px] leading-[160%] font-light">
                    {item.name}
                  </h1>
                  <p className="text-[16px] leading-[160%] font-medium">
                    {chosenSymbol}
                    {item.prices
                      .filter(
                        (item) => item.currency.symbol === chosenSymbol
                      )[0]
                      .amount.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenCart;
