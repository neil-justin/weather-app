export { determineTemperatureSymbol };

export default function temperatureConversion
    (currentTemperatureScale, chosenTemperatureScale, temperature) {
    if (currentTemperatureScale === 'kelvin'
        && chosenTemperatureScale === 'celsius') {
        const temperatureInCelsius = temperature - 273.15;
        return Math.round(temperatureInCelsius);
    }
}

function determineTemperatureSymbol(event = null) {
    let symbol;

    if (event === null) {
        symbol = '°C';
    }

    return symbol;
}