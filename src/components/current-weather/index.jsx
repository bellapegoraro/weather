import axios from "axios";
import { useState, useEffect } from "react";

const CurrentWeather = () => {
  const [response, setResponse] = useState(null);
  const getData = async () => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=curitiba&appid=b360753aa19b78389b811f9a464ab3f7"
    );

    setResponse(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>Temperatura atual: {(response.main.temp - 273.15).toFixed(2)} º C</p>
      <img
        alt="icon-weather"
        src={`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`}
      />
      <p>{response.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
