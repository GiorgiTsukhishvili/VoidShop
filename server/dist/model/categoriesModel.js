"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categoriesSchema = new mongoose_1.default.Schema({
    category: [String],
    prices: [{ label: String, symbol: String }],
});
exports.Categories = mongoose_1.default.model("Categories", categoriesSchema);
