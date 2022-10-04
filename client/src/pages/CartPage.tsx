import React from "react";
import { CartPageLeft } from "../components";
import { useCartItemsContext } from "../context/CartItemsContext";
import { v4 } from "uuid";

const CartPage = () => {
  const { savedItems } = useCartItemsContext();

  return (
    <div className="mt-[160px] mx-[100px] text-[#1d1f22]">
      <h1 className="uppercase font-bold text-[32px] leading-[40px] mb-[55px]">
        Cart
      </h1>

      {savedItems.length > 0 &&
        savedItems.map((item) => (
          <div className="w-full border-y-[1px] border-[#e5e5e5] flex justify-between">
            <CartPageLeft item={item} key={v4()} />
          </div>
        ))}
    </div>
  );
};

export default CartPage;
