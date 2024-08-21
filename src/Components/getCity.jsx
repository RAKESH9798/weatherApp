import React, { useState } from 'react';

const GetCity = ({ setCity }) => {
    
  const [inputCity, setInputCity] = useState('');

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="city"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GetCity;
