interface CartpageLeftPrices {
  currency: {
    label: string;
    symbol: string;
  };
  _id: string;
  amount: number;
}

export interface CartpageLeft {
  _id: string;
  name: string;
  inStock: string;
  gallery: string[];
  description: string;
  category: string;
  prices: CartpageLeftPrices[];
  brand: string;
  amount?: number;
}
