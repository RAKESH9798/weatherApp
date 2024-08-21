import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './Components/weatherCard';
import WeatherDetails from './Components/weatherDetails';
import UserSelector from './Components/userSelector';
import GetCity from './Components/getCity';
import './App.css'

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [userRole, setUserRole] = useState('traveller');
  const [city, setCity] = useState('Chennai');

  const getBackgroundImage = () => {
    switch (userRole) {
      case 'traveler':
        return 'url(https://res.cloudinary.com/simplotel/image/upload/x_0,y_65,w_625,h_352,r_0,c_crop,q_90,fl_progressive/w_500,f_auto,c_fit/hablis-hotel-chennai/travellers)';
      case 'farmer':
        return 'url(https://blog.sathguru.com/wp-content/uploads/2020/06/initiative-towards-making-agriculture-a-profitable-business-for-farmers-in-telangana-1200x720.jpg)';
      case 'event-planner':
        return 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLig1H5cfDbpeQEeeMn1zGuHLRJZ87Y-GT2w&s)';
      default:
        return 'url(https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920.jpg)';
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d6ffbe91dd4e0581274fb06f567eebf`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="App" style={{ backgroundImage: getBackgroundImage() }}>
      <h1>Weather Dashboard</h1>
      {userRole && (<UserSelector setUserRole={setUserRole} />)}
      <GetCity setCity={setCity} />
      {weatherData && (
        <>
          <WeatherCard weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
    </div>
  );
};

export default App;
