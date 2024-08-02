"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weatherController_1 = require("../controllers/weatherController");
const router = (0, express_1.Router)();
router.get('/getWeather/:city', weatherController_1.getWeather);
router.get('/history', weatherController_1.getWeatherHistory);
exports.default = router;
