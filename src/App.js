import Header from "./components/header/index";
import CurrentWeather from "./components/current-weather/";
import NextWeather from "./components/next-weather/";
import Footer from "./components/footer/index";

const App = () => {
  return (
    <div>
      <Header />
      <CurrentWeather />
      <NextWeather />
      <Footer />
    </div>
  );
};

export default App;
