
import axios from 'axios';
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
// & key=2JT2JZCXZGJZGTCRVUH4TYV7P
const apiKey = import.meta.env.VITE_apikey;

async function getWeather(city) {
    const response = await axios.get(`${baseUrl}${city}/?unitGroup=metric&include=days%2Ccurrent&&key=${apiKey}`)
    return response.data
}

export default { getWeather }