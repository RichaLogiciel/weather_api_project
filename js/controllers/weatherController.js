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
exports.getWeather = void 0;
const weather_1 = require("../models/weather");
const weatherServices_1 = require("../services/weatherServices");
const getWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city } = req.params;
    try {
        const weatherData = yield (0, weatherServices_1.fetchWeatherData)(city);
        if (!weatherData) {
            return res.status(400).json({ msg: "Invalid city name" });
        }
        const weather = new weather_1.weatherModel({
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            date: new Date() // Ensure date field is set
        });
        const savedData = yield weather.save();
        console.log(savedData);
        return res.status(200).json(savedData);
    }
    catch (error) {
        console.error("Error:", error.message);
        console.error("Error Stack:", error.stack);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
});
exports.getWeather = getWeather;
