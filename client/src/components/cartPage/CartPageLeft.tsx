import React from "react";
import { useCategoriesAndPricesContext } from "../../context/CategoriesAndPricesContext";
import { CartpageLeft } from "./cartPageInterfaces/cartPageLeftInterface";

const CartPageLeft = ({ item }: { item: CartpageLeft }) => {
  const { chosenSymbol } = useCategoriesAndPricesContext();

  return (
    <div>
      <h1 className="text-[30px] leading-[27px] mb-[24px] font-semibold">
        {item.brand}
      </h1>
      <h1 className="text-[30px] leading-[27px] mb-[16px] font-normal">
        {item.name}
      </h1>

      <p className="text-[24px] leading-[24px] mb-[20px] font-medium">
        Number of items: {item.amount}
      </p>

      <p className="text-[24px] leading-[24px] mb-[20px] font-bold">
        Price per item: {chosenSymbol}{" "}
        {item.prices
          .filter((item) => item.currency.symbol === chosenSymbol)[0]
          .amount.toFixed(2)}
      </p>
    </div>
  );
};

export default CartPageLeft;
