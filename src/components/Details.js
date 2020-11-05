import React from 'react'
import { useSelector } from 'react-redux';
import dayBG from '../assets/day-bg';
import nightBG from '../assets/night-bg.webp'
import '../style/main.css';


function Details() {
	const weatherSelector = useSelector(state => state.WeatherInfo)
	let isDay = '';
	if(weatherSelector.weatherinfo.current.is_day === "yes"){
		isDay = true;
	}else {
		isDay = false;
	}

	return (
		<div className="details" style={isDay? {backgroundImage: `url(${dayBG})`} : {backgroundImage: `url(${nightBG})`}}>
      <h3>Weather Details</h3>
      <p className="city">{weatherSelector.weatherinfo.location.name}
        <span> {weatherSelector.weatherinfo.location.country}</span>
      </p>
      <p>Temp: {weatherSelector.weatherinfo.current.temperature} &#730;C</p>
      <img src={weatherSelector.weatherinfo.current.weather_icons[0]} />
	<p className="desc">It is a {weatherSelector.weatherinfo.current.weather_descriptions[0]} weather!</p>
    </div>
	)
}

export default Details
