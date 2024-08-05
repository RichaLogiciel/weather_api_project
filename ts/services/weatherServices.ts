import axios from "axios";

interface customWeatherData {
    city: string,
    temperature: number,
    description: string
}

export const fetchWeatherData = async(city: string) => {
    const API_KEY = 'd15cd8f6c479784d5dd866c489001336';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        console.error("Error:", error);
        throw error;
    }
}