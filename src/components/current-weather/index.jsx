import axios from "axios";
import { useState, useEffect } from "react";

const CurrentWeather = () => {
  const [response, setResponse] = useState(null);
  const getData = async () => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=curitiba&units=metric&appid=7"
    );

    setResponse(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>Temperatura atual: {response.main.temp} º C</p>
      <img
        alt="icon-weather"
        src={`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`}
      />
      <p>{response.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
