interface CartItemsPrices {
  currency: {
    label: string;
    symbol: string;
  };
  _id: string;
  amount: number;
}

export interface CartItems {
  _id: string;
  name: string;
  inStock: string;
  gallery: string[];
  description: string;
  category: string;
  prices: CartItemsPrices[];
  brand: string;
  amount?: number;
}

export interface CartItemsInterface {
  savedItems: CartItems[];
  addItemToCart: (item: CartItems) => void;
  removeItemFromCart: (id: string) => void;
}
