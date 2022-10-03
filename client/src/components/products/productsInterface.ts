interface ProductsPrices {
  currency: {
    label: string;
    symbol: string;
  };
  _id: string;
  amount: number;
}

export interface ProductsItems {
  _id: string;
  name: string;
  inStock: string;
  gallery: string[];
  description: string;
  category: string;
  prices: ProductsPrices[];
  brand: string;
}
