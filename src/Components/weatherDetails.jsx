import React from 'react';

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weather-details">
      <h3>Additional Details</h3>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
      <p>Visibility: {weatherData.visibility} meters</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default WeatherDetails;
