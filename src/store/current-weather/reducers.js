import {
  FIVE_DAYS_WEATHER,
  CURRENT_WEATHER,
  HOUR_WEATHER,
} from "./actions-types";

const stateObj = {
  currentWeather: [],
  nextWeather: [],
  hour: "",
};

const getWeatherReducer = (state = stateObj, actions) => {
  switch (actions.type) {
    case FIVE_DAYS_WEATHER:
      state.nextWeather = [actions.weather];
      return state;
    case CURRENT_WEATHER:
      state.currentWeather = [actions.weather];
      return state;
    case HOUR_WEATHER:
      state.hour = actions.hour;
      return state;
    default:
      return state;
  }
};

export default getWeatherReducer;
