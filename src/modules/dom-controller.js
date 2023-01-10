import { determineTemperatureSymbol } from "./helper";

export default function displayRequiredData(data) {
    const weatherDataContainer = document.createElement('section');
    weatherDataContainer.id = 'weather-data-container';
    const mainElement = document.querySelector('main');
    mainElement.appendChild(weatherDataContainer);

    const cityNameElement = document.createElement('h1');
    cityNameElement.id = 'city-name';
    cityNameElement.textContent = `${data.name}`;
    weatherDataContainer.appendChild(cityNameElement);

    const cityWeatherDescription = document.createElement('p');
    cityWeatherDescription.id = `city-weather-description`;
    cityWeatherDescription.textContent = `${data.description}`;
    weatherDataContainer.appendChild(cityWeatherDescription);

    const chosenTemperatureSymbol = determineTemperatureSymbol();

    const cityTemperatureElement = document.createElement('p');
    cityTemperatureElement.textContent = `Temperature: ${data.temp} ${chosenTemperatureSymbol}`;
    weatherDataContainer.appendChild(cityTemperatureElement);

    const cityFeelsLikeElement = document.createElement('p');
    cityFeelsLikeElement.textContent = `RealFeel: ${data.feels_like} ${chosenTemperatureSymbol}`;
    weatherDataContainer.appendChild(cityFeelsLikeElement);

    const cityHumidityElement = document.createElement('p');
    cityHumidityElement.textContent = `Humidity: ${data.humidity} %`;
    weatherDataContainer.appendChild(cityHumidityElement);
}