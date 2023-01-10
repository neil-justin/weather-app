import '../style.css';
import temperatureConversion from './helper';
import displayRequiredData from './dom-controller';

async function fetchWeatherData(city) {
    const openWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=189180a88040d7ad1266c4f2a02b2c97`, { mode: 'cors' });
    const weatherData = await openWeatherResponse.json();

    if (openWeatherResponse.ok) {
        return weatherData;
    } else {
        throw new Error(weatherData.message);
    }
}

async function aggregateRequiredData(city) {
    const weatherData = await fetchWeatherData(city);
    const requiredData = {};
    requiredData.name = weatherData.name;
    requiredData.temp = temperatureConversion('kelvin', 'celsius', weatherData.main.temp);
    requiredData.feels_like = temperatureConversion('kelvin', 'celsius', weatherData.main.feels_like);
    requiredData.humidity = weatherData.main.humidity;
    requiredData.description = weatherData.weather[0].description;
    return requiredData;
}

const searchCityButton = document.querySelector('#search-city-button');
searchCityButton.addEventListener('click', () => {
    const searchCityInput = document.querySelector('#search-city-input');

    aggregateRequiredData(searchCityInput.value)
        .then(data => {
            const mainElement = document.querySelector('main');
            mainElement.replaceChildren();
            displayRequiredData(data);
        })
        .catch(error => window.alert(error));
})