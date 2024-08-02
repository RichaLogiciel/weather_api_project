"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const weatherSchema = new mongoose_1.default.Schema({
    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }
});
const weatherModel = mongoose_1.default.model('Weather', weatherSchema);
exports.weatherModel = weatherModel;
