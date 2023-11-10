// Equation for converting from fahrenheit to celsius
// (°F − 32) × 5/9 = °C
const convertToCelsius = function (fahrenheit) {
	return +Number.parseFloat((fahrenheit - 32) * (5 / 9)).toFixed(1);
};

// Equation for converting from celsius to fahrenheit
// (°C × 9/5) + 32 = °F
const convertToFahrenheit = function (celsius) {
	return +Number.parseFloat(celsius * (9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
