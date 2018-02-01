import axios from 'axios';

const API_KEY = 'cee258be370d980e04305931dbaaa00a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  return {
    type: FETCH_WEATHER,
    payload: axios.get(`${ROOT_URL}&q=${city},ar`)
  };
}
