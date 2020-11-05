import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './actions/fetchWeather';

import './App.css';

function App() {

  const [city, setCity] = useState('');

  const weatherSelector = useSelector(state => state.WeatherInfo)
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  useEffect(() => {
    getWeatherInfoAction("Mumbai")
  }, [])

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("No City Entered")
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherinfo)
    }
  }

  let details = "";
  if (weatherSelector.weatherinfo && weatherSelector.weatherinfo.hasOwnProperty("location")) {
    details = <div className="details">
      <h3>Weather Details</h3>
      <p>{weatherSelector.weatherinfo.location.name}
        <span> {weatherSelector.weatherinfo.location.country}</span>
      </p>
      <p>{weatherSelector.weatherinfo.current.temperature} &#730;C</p>
      <img src={weatherSelector.weatherinfo.current.weather_icons.[0]} />
    </div>
  } else {
    details = <p>Type a proper city name</p>
  }

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <p>Powered By React-Redux</p>
      </header>
      <main>
        <form onSubmit={getWeatherInfo}>
          <div className="control">
            <input type="text" name="name" placeholder="City to check weather, Ex: Paris" onChange={e => setCity(e.target.value)} />
          </div>
          <input type="submit" value="Check Weather" />
        </form>
        {details}
      </main>
    </div>
  );
}

export default App;
