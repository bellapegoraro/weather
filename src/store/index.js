import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getWeatherReducer from "./weather/reducers";
const reducers = combineReducers({
  weather: getWeatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
