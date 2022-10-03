"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleItem = exports.getAllItems = void 0;
const itemsModel_1 = require("../model/itemsModel");
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield itemsModel_1.Items.find();
        res.status(200).json({
            status: "success",
            count: items.length,
            data: {
                items,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.getAllItems = getAllItems;
const getSingleItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield itemsModel_1.Items.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                item,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.getSingleItem = getSingleItem;
