import { Request, Response } from 'express';
import { weatherModel } from '../models/weather';
import { fetchWeatherData } from '../services/weatherServices';

interface weatherResponse {
    name: string,   
    main: {
        temp: number;
    },
    weather: Array<{
        description: string;
    }>;
}
export const getWeather = async (req: Request, res: Response): Promise<Response> => {
    const { city } = req.params;
    try {
        const weatherData = await fetchWeatherData(city);
        if (!weatherData) {
            return res.status(400).json({ msg: "Invalid city name" });
        }
        const weather = new weatherModel({
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            date: new Date()  // Ensure date field is set
        });
        const savedData = await weather.save();
        console.log(savedData);
        return res.status(200).json(savedData);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};
