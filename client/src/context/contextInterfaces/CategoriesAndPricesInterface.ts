export interface CurrencyInterface {
  _id: string;
  label: string;
  symbol: string;
}

export interface CategoriesAndPricesContextInterface {
  categories: string[];
  currencies: CurrencyInterface[];
}
