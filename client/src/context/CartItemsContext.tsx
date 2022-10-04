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

  const removeItemFromCart = (id: string) => {
    const item = savedItems.find((item) => item._id === id);

    if (item?.amount === 1) {
      setSavedItems((prevItems) => {
        return prevItems.filter((item) => item._id !== id);
      });
    } else {
      setSavedItems((prevItems) => {
        return prevItems.map((item) =>
          item._id === id ? { ...item, amount: item.amount! - 1 } : item
        );
      });
    }
  };

  const addAmountOfItems = (id: string) => {
    setSavedItems((prevItems) => {
      return prevItems.map((item) =>
        item._id === id ? { ...item, amount: item.amount! + 1 } : item
      );
    });
  };

  return (
    <CartItemsContext.Provider
      value={{
        savedItems,
        addItemToCart,
        removeItemFromCart,
        addAmountOfItems,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCartItemsContext = () => useContext(CartItemsContext);
