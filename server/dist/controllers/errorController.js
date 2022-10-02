"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCont = void 0;
const errorCont = (req, res) => {
    res.status(404).json({
        status: "fail",
        message: `No route fount on request ${req.path}`,
    });
};
exports.errorCont = errorCont;
