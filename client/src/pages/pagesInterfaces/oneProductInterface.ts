interface OneProducPrices {
  currency: {
    label: string;
    symbol: string;
  };
  _id: string;
  amount: number;
}

export interface OneProducItem {
  _id: string;
  name: string;
  inStock: string;
  gallery: string[];
  description: string;
  category: string;
  prices: OneProducPrices[];
  brand: string;
}
