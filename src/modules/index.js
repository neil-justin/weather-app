import '../style.css';
import temperatureConversion from './helper';

async function fetchWeatherData(city) {
    try {
        const openWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=189180a88040d7ad1266c4f2a02b2c97`, { mode: 'cors' });
        const weatherData = await openWeatherResponse.json();

        if (openWeatherResponse.ok) {
            return weatherData;
        } else {
            throw new Error(weatherData.message);
        }
    } catch (error) {
        console.error(error);
    }
}

async function aggregateRequiredData() {
    const weatherData = await fetchWeatherData('cavite');
    const requiredData = {};
    requiredData.name = weatherData.name;
    requiredData.temp = temperatureConversion('kelvin', 'celsius', weatherData.main.temp);
    requiredData.feels_like = temperatureConversion('kelvin', 'celsius', weatherData.main.feels_like);
    requiredData.humidity = weatherData.main.humidity;
    requiredData.description = weatherData.weather[0].description;
    console.log(requiredData);
    return requiredData;
}

aggregateRequiredData();