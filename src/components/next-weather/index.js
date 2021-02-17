import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NextWeather = () => {
  const [show, setShow] = useState(null);

  const weather = useSelector((state) => state.weather.nextWeather);
  const hour = useSelector((state) => state.weather.hour);

  const handleFilter = () => {
    if (weather && hour) {
      const filtered = weather[0].list
        .map((weather) => weather)
        .filter((infos) => infos.dt_txt.includes(hour));
      setShow(filtered);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [weather, hour]);

  return (
    <>
      {show &&
        show.map((infos) => (
          <div key={infos.dt}>
            <p>Dia e horário: {infos.dt_txt}</p>
            <img
              alt="icon-weather"
              src={`http://openweathermap.org/img/wn/${infos.weather[0].icon}@2x.png`}
            />
            <p>Temperatura máxima: {infos.main.temp_max} ºC</p>
            <p>Temperatura mínima: {infos.main.temp_min} ºC</p>
            <p>Status da Previsão: {infos.weather[0].description}</p>
            <p>Umidade: {infos.main.humidity} %</p>
          </div>
        ))}
    </>
  );
};

export default NextWeather;
