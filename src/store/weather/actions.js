import {
  FIVE_DAYS_WEATHER,
  CURRENT_WEATHER,
  HOUR_WEATHER,
} from "./actions-types";

export const getNextWeather = (weather) => ({
  type: FIVE_DAYS_WEATHER,
  weather,
});

export const getCurrentWeather = (weather) => ({
  type: CURRENT_WEATHER,
  weather,
});

export const getHourWeather = (hour) => ({
  type: HOUR_WEATHER,
  hour,
});
