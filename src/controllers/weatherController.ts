import weatherModel from '../models/weather';
import express,{ Request,Response } from 'express';
import axios from "axios"; 

const API_KEY = '65e92b00040ca46b3971462d1e350b13';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async(req: Request, res: Response) => {
   try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&unit`)
        return response.data;
    } catch(error) {
        console.log("Error Occured while gettinh weather", error);
        return res.status(500).json({ msg: "Internal Sever Error" });
    }
}

