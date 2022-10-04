import React from "react";
import { useCartItemsContext } from "../../context/CartItemsContext";
import { useCategoriesAndPricesContext } from "../../context/CategoriesAndPricesContext";
import { HiddenCartprops } from "./hiddenCartInterface";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

import AddButton from "./../../assets/svg/plus-square-small.svg";
import RemoveButton from "./../../assets/svg/minus-square-small.svg";

const HiddenCart = ({ hide }: HiddenCartprops) => {
  const { savedItems, addAmountOfItems, removeItemFromCart } =
    useCartItemsContext();
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
          <div className=" h-[450px] overflow-y-auto scrollbar">
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
                    {(
                      +item.prices.filter(
                        (item) => item.currency.symbol === chosenSymbol
                      )[0].amount * item.amount!
                    ).toFixed(2)}
                  </p>
                </div>

                <div className="flex ">
                  <div className="flex flex-col  items-center justify-between ml-[16px] pb-[20px] h-full">
                    <img
                      src={AddButton}
                      alt="Add Button"
                      className="cursor-pointer"
                      onClick={() => addAmountOfItems(item._id)}
                    />
                    <h1 className="text-[16px] leading-[160%] font-medium">
                      {item.amount}
                    </h1>
                    <img
                      src={RemoveButton}
                      alt="Remove Button"
                      className="cursor-pointer"
                      onClick={() => removeItemFromCart(item._id)}
                    />
                  </div>
                  <img
                    src={item.gallery[0]}
                    alt="Product"
                    className="w-[121px] h-full object-contain ml-[8px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-[16px] items-center">
          <h1 className="text-[16px] font-medium leading-[18px]">
            Total Items: {totalItems}
          </h1>
          <p className="text-[16px] font-bold leading-[160%]">
            {chosenSymbol} {totalItemsPrice}
          </p>
        </div>

        <div className="mt-[16px] mb-[32px] text-[14px] font-semibold leading-[120%] flex justify-center">
          <Link
            to={"/cart"}
            onClick={() => hide(false)}
            className="text-[#1d1f22] py-[16px] px-[32px] border-[2px] border-[#1d1f22]"
          >
            VIEW BAG
          </Link>

          <Link
            to={"/"}
            onClick={() => hide(false)}
            className="text-white py-[16px] ml-[12px] px-[32px] border-[2px] border-[#5ece7b] bg-[#5ece7b]"
          >
            CHECK OUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HiddenCart;
