import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWeather} from './actions/fetchWeather';

import './App.css';

function App() {

  const [city, setCity] = useState('');

  const weatherSelector = useSelector(state => state.WeatherInfo)
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if(city === ""){
      console.log("No City Entered")
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherinfo)
    }
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
              <input type="text" name="name" placeholder="City to check weather, Ex: Paris" onChange={e => setCity(e.target.value)}/>
            </div>
            <input type="submit" value="Check Weather"/>
          </form>
          
        </main>
      </div>
  );
}

export default App;
