import { weatherModel} from '../models/weather';
import { Request,Response } from 'express';
import { fetchWeatherData } from '../services/weatherServices';


export const getWeather = async(req: Request, res: Response): Promise<Response> => {
    const { city } = req.params;
    try {
        const weatherData = await fetchWeatherData(city);
        if(!weatherData) {
            return res.status(400).json({ msg: "Invalid"});
        }
        const weather = new weatherModel(weatherData);
        const savedData = await weather.save();
        console.log(savedData);
        return res.status(200).json(weather);
    }  catch(error) {
        console.log("Didn't find error", error);
        return res.status(500).json({ msg: " 00 Internal Server error"});
    }
};


export const getWeatherHistory =  async(req: Request, res: Response) => {
    try {
        const history = await weatherModel.find().sort({ date: -1});
        return res.json(history);
    } catch(error) {
        return res.status(500).json({ msg: "Internal Server Error"});
    }
}



