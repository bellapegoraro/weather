import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const [show, setShow] = useState(null);
  const weather = useSelector((state) => state.weather.currentWeather);

  const handleShow = () => {
    if (weather) {
      setShow(weather);
    }
  };
  useEffect(() => {
    handleShow();
  }, []);

  return (
    <div>
      {show && (
        <>
          <p>Temperatura atual: {show[0].main.temp} º C</p>
          <img
            alt="icon-weather"
            src={`http://openweathermap.org/img/wn/${show[0].weather[0].icon}@2x.png`}
          />
          <p>{show[0].weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
