"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = (function () {
    return mongoose_1.default.connect("mongodb://localhost:27017/urlshortener", {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    });
});
