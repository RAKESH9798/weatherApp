import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <h3>{weatherData.weather[0].description}</h3>
      <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
