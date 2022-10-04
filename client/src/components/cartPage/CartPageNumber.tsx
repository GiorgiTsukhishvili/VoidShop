import React from "react";
import { useCartItemsContext } from "../../context/CartItemsContext";

import MinusSquare from "./../../assets/svg/minus-square-large.svg";
import PlusSquare from "./../../assets/svg/plus-square-large.svg";
import { CartPageNumberProps } from "./cartPageInterfaces/cartPageNumberInterface";

const CartPageNumber = ({ amount, id }: CartPageNumberProps) => {
  const { addAmountOfItems, removeItemFromCart } = useCartItemsContext();

  return (
    <div className="flex flex-col items-center justify-between my-[24px] mr-[25px]">
      <img
        src={PlusSquare}
        alt="Plus"
        className=" cursor-pointer"
        onClick={() => addAmountOfItems(id)}
      />
      <h1 className="font-medium text-[24px] leading-[160%]">{amount}</h1>
      <img
        src={MinusSquare}
        alt="Minus"
        className=" cursor-pointer"
        onClick={() => removeItemFromCart(id)}
      />
    </div>
  );
};

export default CartPageNumber;
