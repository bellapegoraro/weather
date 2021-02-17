import Header from "./components/header/index";
import CurrentWeather from "./components/current-weather/";
import NextWeather from "./components/next-weather/";

const App = () => {
  return (
    <div>
      <Header />
      <CurrentWeather />
      <p>-----------------------------</p>
      <NextWeather />
    </div>
  );
};

export default App;
