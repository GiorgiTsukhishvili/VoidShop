import React, { useState } from "react";
import { useCategoriesAndPricesContext } from "../../context/CategoriesAndPricesContext";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import Logo from "./../../assets/svg/VSF.svg";
import Arrow from "./../../assets/svg/arrow.svg";
import Cart from "./../../assets/svg/Empty Cart.svg";
import { useCartItemsContext } from "../../context/CartItemsContext";
import HiddenCart from "../hiddenCart/HiddenCart";

const Navbar = () => {
  const {
    categories,
    currencies,
    chosenSymbol,
    setChosenSymbol,
    chosenCategory,
    setChosenCategory,
  } = useCategoriesAndPricesContext();
  const [showCurrencies, setShowCurrencies] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { savedItems } = useCartItemsContext();

  return (
    <div className="h-[60px] flex items-center justify-between fixed text-[#1d1f22] top-0 bg-white w-full">
      <div className="flex ml-[100px]">
        {categories.map((category) => (
          <Link
            to={"/"}
            key={v4()}
            className={`text-[16px] cursor-pointer font-medium uppercase py-[20px] px-[16px]  hover:border-b-[3px] hover:border-green-500 ${
              chosenCategory === category && "border-b-[3px] border-green-500"
            }`}
            onClick={() => setChosenCategory(category)}
          >
            {category}
          </Link>
        ))}
      </div>

      <img src={Logo} alt="Navbar Logo" />

      <div className="mr-[100px]">
        <div className="flex">
          <h1
            className="text-[18px] font-semibold pointer mr-2.5 cursor-pointer"
            onClick={() => setShowCurrencies((prevState) => !prevState)}
          >
            {currencies.length > 0 && chosenSymbol}
          </h1>
          <img src={Arrow} alt="Arrow" />
          <img
            src={Cart}
            alt="Cart"
            className="ml-[22px] cursor-pointer"
            onClick={() => setShowCart((prevState) => !prevState)}
          />

          {savedItems.length > 0 && (
            <h1 className="bg-[#1d1f22] text-white translate-x-[-7px] translate-y-[-7px] rounded-full text-[14p] w-[20px] flex justify-center items-center h-[20px] ">
              {savedItems.length}
            </h1>
          )}
        </div>

        {showCurrencies && (
          <div className="absolute w-[100px] translate-x-[-15px] z-10 bg-white shadow-md">
            {currencies.map((currencie) => (
              <p
                key={v4()}
                className={`text-center my-2.5 py-2.5 text-[18px] font-semibold cursor-pointer ${
                  chosenSymbol === currencie.symbol && "bg-[#eeeeee]"
                }`}
                onClick={() => {
                  setChosenSymbol(currencie.symbol);
                  setShowCurrencies((prevState) => !prevState);
                }}
              >
                {currencie.symbol} {currencie.label}
              </p>
            ))}
          </div>
        )}
      </div>

      {showCart && <HiddenCart hide={setShowCart} />}
    </div>
  );
};

export default Navbar;
