interface MainPagePrices {
  currency: {
    label: string;
    symbol: string;
  };
  _id: string;
  amount: number;
}

export interface MainPageItems {
  _id: string;
  name: string;
  inStock: string;
  gallery: string[];
  description: string;
  category: string;
  prices: MainPagePrices[];
  brand: string;
}
