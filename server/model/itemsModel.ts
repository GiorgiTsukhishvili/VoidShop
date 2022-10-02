import mongoose from "mongoose";

const itemsModel = new mongoose.Schema({
  name: String,
  inStock: String,
  gallery: [String],
  description: String,
  category: String,
  attributes: [
    {
      id: String,
      name: String,
      type: String,
      items: [
        {
          displayValue: String,
          value: String,
          id: String,
        },
      ],
    },
  ],
  prices: [
    {
      currency: {
        label: String,
        symbol: String,
      },
      amount: Number,
    },
  ],
  brand: String,
});

export const Items = mongoose.model("Items", itemsModel);
