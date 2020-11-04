export function fetchWeather(city) {
  return function (dispatch) {
    fetch(`http://api.weatherstack.com/current?access_key=595f46d2c95c5d92749ffb4e7d1ebde6&query=${city}`)
    .then(res => {
      return res.json();
    })
    .then(JSONres => {
      dispatch({type:"FETCH_WEATHER", payload: JSONres})
    })
    .catch(err => {
      console.log(err);
    })
  }
}