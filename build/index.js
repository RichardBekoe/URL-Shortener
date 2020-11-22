"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var database_1 = __importDefault(require("./app/database"));
var routes_1 = __importDefault(require("./app/routes"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
database_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.use(express_1.default.json());
app.listen(3000, "0.0.0.0", function () { return console.log('Running on port 3000'); });