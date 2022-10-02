export interface CurrencyInterface {
  _id: string;
  label: string;
  symbol: string;
}

export interface CategoriesAndPricesContextInterface {
  categories: string[];
  currencies: CurrencyInterface[];
  chosenSymbol: string;
  setChosenSymbol: (val: string) => void;
}
