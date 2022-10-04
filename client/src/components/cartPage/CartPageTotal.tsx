import React from "react";
import { useCartItemsContext } from "../../context/CartItemsContext";
import { useCategoriesAndPricesContext } from "../../context/CategoriesAndPricesContext";

const CartPageTotal = () => {
  const { chosenSymbol } = useCategoriesAndPricesContext();
  const { savedItems } = useCartItemsContext();

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
    <div className="mt-[30px]">
      <div className="flex mt-[5px]">
        <h1 className="text-[24px] leading-[28px] w-[100px] font-normal">
          Tax 21%:
        </h1>
        <h1 className="text-[24px] leading-[28px] font-bold">
          {chosenSymbol} {((+totalItemsPrice / 21) * 100).toFixed(2)}
        </h1>
      </div>
      <div className="flex mt-[5px]">
        <h1 className="text-[24px] leading-[28px] w-[100px] font-normal">
          Quantity:{" "}
        </h1>
        <h1 className="text-[24px] leading-[28px] font-bold">{totalItems}</h1>
      </div>
      <div className="flex mt-[5px]">
        <h1 className="text-[24px] leading-[28px] w-[100px] font-normal">
          Total:{" "}
        </h1>
        <h1 className="text-[24px] leading-[28px] font-bold">
          {chosenSymbol} {totalItemsPrice}
        </h1>
      </div>

      <button className="uppercase w-[279px] h-[43px] text-white bg-[#5ece7b] mt-[16px] leading-[120%] mb-[200px] text-[14px] font-semibold cursor-pointer">
        order
      </button>
    </div>
  );
};

export default CartPageTotal;
