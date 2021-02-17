// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    backgroundColor: "#a1cae2",
  },
  media: {
    height: 100,
    width: 150,
  },
});

const CurrentWeather = () => {
  const classes = useStyles();
  const weather = useSelector((state) => state.weather.currentWeather);

  return (
    <>
      {weather.length !== 0 && (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`http://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`}
              title="weather"
            />
            <CardContent>
              <Typography gutterBottom variant="body" component="h3">
                Temperatura atual: {weather[0].main.temp} º C
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Status da Previsão: {weather[0].weather[0].description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Umidade: {weather[0].main.humidity}%
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default CurrentWeather;
