import axios from "axios";
import { useState, useEffect } from "react";

const NextWeather = () => {
  const [response, setResponse] = useState(null);
  const [weather, setWeather] = useState(null);

  const getData = async () => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=curitiba&units=metric&appid="
    );
    setResponse(data);
    getWeather();
  };

  const getWeather = () => {
    if (response !== null) {
      const filtered = response.list
        .map((weather) => weather)
        .filter((infos) => infos.dt_txt.includes("09:00:00"));
      setWeather(filtered);
    }
  };

  console.log(weather);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {weather &&
        weather.map((infos) => (
          <div key={infos.dt}>
            <p>Dia e horário: {infos.dt_txt}</p>
            <p>Temperatura máxima: {infos.main.temp_max} ºC</p>
            <p>Temperatura máxima: {infos.main.temp_min} ºC</p>
          </div>
        ))}
    </>
  );
};

export default NextWeather;
