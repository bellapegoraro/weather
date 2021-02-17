import axios from "axios";
import { useState, useEffect } from "react";

const CurrentWeather = () => {
  const [response, setResponse] = useState(null);
  const getData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=curitiba&lang=pt_br&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );

    setResponse(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {response && (
        <>
          {" "}
          <p>Temperatura atual: {response.main.temp} º C</p>
          <img
            alt="icon-weather"
            src={`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`}
          />
          <p>{response.weather[0].description}</p>{" "}
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
