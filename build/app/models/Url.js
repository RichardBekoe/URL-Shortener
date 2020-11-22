"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// import shortId from "shortid"
var nanoid_1 = require("nanoid");
var nanoid = nanoid_1.customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);
var UrlSchema = new mongoose_1.default.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrlCode: {
        type: String,
        required: true,
        // default: shortId.generate
        default: function () { return nanoid(); }
    }
});
var UrlModel = mongoose_1.default.model('ShortUrl', UrlSchema);
exports.default = UrlModel;
