import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  category: [String],
  prices: [{ label: String, symbol: String }],
});

export const Categories = mongoose.model("Categories", categoriesSchema);
