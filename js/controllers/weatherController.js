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
exports.getWeatherHistory = exports.getWeather = void 0;
const weather_1 = require("../models/weather");
const weatherServices_1 = require("../services/weatherServices");
const getWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city } = req.params;
    try {
        const weatherData = yield (0, weatherServices_1.fetchWeatherData)(city);
        if (!weatherData) {
            return res.status(400).json({ msg: "Invalid" });
        }
        const weather = new weather_1.weatherModel(weatherData);
        const savedData = yield weather.save();
        console.log(savedData);
        return res.status(200).json(weather);
    }
    catch (error) {
        console.log("Didn't find error", error);
        return res.status(500).json({ msg: " 00 Internal Server error" });
    }
});
exports.getWeather = getWeather;
const getWeatherHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const history = yield weather_1.weatherModel.find().sort({ date: -1 });
        return res.json(history);
    }
    catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" });
    }
});
exports.getWeatherHistory = getWeatherHistory;
