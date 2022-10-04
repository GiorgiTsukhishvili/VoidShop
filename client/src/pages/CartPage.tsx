import React from "react";
import {
  CartPageImages,
  CartPageLeft,
  CartPageNumber,
  CartPageTotal,
} from "../components";
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
          <div
            key={v4()}
            className="w-full border-y-[1px] border-[#e5e5e5] flex justify-between"
          >
            <CartPageLeft item={item} />

            <div className="flex">
              <CartPageNumber amount={item.amount!} id={item._id} />
              <CartPageImages images={item.gallery} />
            </div>
          </div>
        ))}

      {savedItems.length > 0 && <CartPageTotal />}
    </div>
  );
};

export default CartPage;
