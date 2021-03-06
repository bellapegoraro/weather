import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { Form } from "./style";
import { useDispatch } from "react-redux";
import {
  getCurrentWeatherThunk,
  getNextWeatherThunk,
  getHourWeatherThunk,
} from "../../store/current-weather/thunk";
import Notification from "../notification/index";

const Search = () => {
  const [inputs, setInputs] = useState({ city: "", hour: "" });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const currencies = [
    {
      value: "03:00:00",
      label: "03:00:00",
    },
    {
      value: "06:00:00",
      label: "06:00:00",
    },
    {
      value: "09:00:00",
      label: "09:00:00",
    },
    {
      value: "12:00:00",
      label: "12:00:00",
    },
    {
      value: "15:00:00",
      label: "15:00:00",
    },
    {
      value: "18:00:00",
      label: "18:00:00",
    },
    {
      value: "21:00:00",
      label: "21:00:00",
    },
    {
      value: "00:00:00",
      label: "00:00:00",
    },
  ];

  const handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    setInputs({ ...inputs, [nam]: val });
  };

  const handleSearch = () => {
    if (inputs.city && inputs.hour !== "") {
      dispatch(getCurrentWeatherThunk(inputs, setOpen, setError));
      dispatch(getNextWeatherThunk(inputs));
      dispatch(getHourWeatherThunk(inputs));
    }
  };

  if (error === true) {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  return (
    <>
      {open && <Notification />}
      <Form>
        <TextField
          id="standard-basic"
          label="Pesquisar"
          name="city"
          value={inputs.city}
          onChange={handleChange}
        />

        <TextField
          id="standard-select-currency"
          select
          label="Hora"
          name="hour"
          value={inputs.hour}
          onChange={handleChange}
          helperText="Escolha a hora"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <span className="material-icons" onClick={handleSearch}>
          search
        </span>
      </Form>
    </>
  );
};

export default Search;
