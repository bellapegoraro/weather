import { getNextWeather, getCurrentWeather, getHourWeather } from "./actions";
import axios from "axios";

export const getCurrentWeatherThunk = (inputs) => (dispatch) => {
  console.log(inputs.city);
  console.log(inputs.hour);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputs.city}&lang=pt_br&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      dispatch(getCurrentWeather(res.data));
    });
};

export const getNextWeatherThunk = (inputs) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${inputs.city}&lang=pt_br&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      dispatch(getNextWeather(res.data));
    });
};

export const getHourWeatherThunk = (inputs) => (dispatch) => {
  dispatch(getHourWeather(inputs.hour));
};
