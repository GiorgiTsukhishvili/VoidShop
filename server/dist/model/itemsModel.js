"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const itemsModel = new mongoose_1.default.Schema({
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
exports.Items = mongoose_1.default.model("Items", itemsModel);
