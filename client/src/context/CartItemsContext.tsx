import React, { createContext, useContext, ReactNode, useState } from "react";
import {
  CartItems,
  CartItemsInterface,
} from "./contextInterfaces/CartItemsInterface";

const CartItemsContext = createContext({} as CartItemsInterface);

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [savedItems, setSavedItems] = useState<CartItems[]>([]);

  const addItemToCart = (item: CartItems) => {
    if (savedItems.every((cartItem) => cartItem._id !== item._id)) {
      setSavedItems((prevItems) => {
        return [...prevItems, { ...item, amount: 1 }];
      });
    } else {
      setSavedItems((prevItems) => {
        return prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, amount: cartItem.amount! + 1 }
            : cartItem
        );
      });
    }
  };

  console.log(savedItems);

  const removeItemFromCart = (id: string) => {};

  return (
    <CartItemsContext.Provider
      value={{ savedItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCartItemsContext = () => useContext(CartItemsContext);
