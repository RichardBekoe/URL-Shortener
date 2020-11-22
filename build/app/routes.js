"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UrlController_1 = __importDefault(require("./controllers/UrlController"));
var routes = express_1.Router();
// route for registering new url
routes.post("/url", UrlController_1.default.store);
// route for accessing and verifying short url
routes.get("/show/:shortUrlCode", UrlController_1.default.show);
// route for listing all urls
routes.get("/list", UrlController_1.default.listUrls);
exports.default = routes;
