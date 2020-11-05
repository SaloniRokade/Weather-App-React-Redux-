import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './actions/fetchWeather';
import Details from './components/Details';

import './style/main.css';

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
    details = <Details/>
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
          <button type="submit">Check Weather</button>
        </form>
        {details}
      </main>
    </div>
  );
}

export default App;
