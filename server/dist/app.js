"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const errorController_1 = require("./controllers/errorController");
const itemsRoute_1 = __importDefault(require("./routes/itemsRoute"));
const categoriesRoute_1 = __importDefault(require("./routes/categoriesRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
app.use("/items", itemsRoute_1.default);
app.use("/categories", categoriesRoute_1.default);
app.all("*", errorController_1.errorCont);
const port = 5000;
mongoose_1.default
    .connect("mongodb://localhost:27017/void-shop")
    .then(() => app.listen(port, () => {
    console.log(`listening on port ${port}`);
}))
    .catch((err) => console.log(err));
