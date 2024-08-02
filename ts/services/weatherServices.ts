import axios from "axios";

interface weatherResponse {
    name: string,   
    main: {
        temp: number;
    },
    weather: Array<{
        description: string;
    }>;
}

interface customWeatherData {
    city: string,
    temperature: number,
    description: string
}

export const fetchWeatherData = async(city: string): Promise<customWeatherData> => {
    const API_KEY = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get<weatherResponse>(url);
        const data = response.data;
        return {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description                                                     
        };
    } catch(error) {
        console.error("Error:", error);
        console.error('Error Fetching weather data:', error);
        throw error;
    }
}