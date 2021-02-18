import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 235,
    height: 250,
    backgroundColor: "#a1cae2",
    marginBottom: 5,
  },
  media: {
    height: 90,
    width: 150,
  },
});

const NextWeather = () => {
  const classes = useStyles();
  const [show, setShow] = useState(null);

  const weather = useSelector((state) => state.weather.nextWeather);
  const hour = useSelector((state) => state.weather.hour);

  const handleFilter = () => {
    if (weather.length !== 0 && hour !== "") {
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
          <Card className={classes.root} key={infos.dt}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`http://openweathermap.org/img/wn/${infos.weather[0].icon}@2x.png`}
                title="weather"
              />
              <CardContent>
                <Typography gutterBottom variant="caption" component="h4">
                  Dia e horário: {infos.dt_txt}
                </Typography>
                <Typography gutterBottom variant="body2" component="h3">
                  Temperatura máxima: {infos.main.temp_max} ºC
                </Typography>
                <Typography gutterBottom variant="body2" component="h3">
                  Temperatura mínima: {infos.main.temp_min} º C
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Status da Previsão: {infos.weather[0].description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Umidade: {infos.main.humidity} %
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </>
  );
};

export default NextWeather;
