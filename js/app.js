"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const PORT = 8000;
const app = (0, express_1.default)();
(0, db_1.connection)("mongodb://127.0.0.1:27017/weather_api_project");
app.use();
app.listen(PORT, () => {
    console.log(`Server Started running o ${PORT}`);
});
