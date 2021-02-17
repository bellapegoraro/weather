import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

const Search = () => {
  const [inputs, setInputs] = useState({ city: "", hour: "" });

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

  return (
    <form>
      <div>
        <TextField
          id="standard-basic"
          label="Pesquisar"
          name="city"
          value={inputs.city}
          onChange={handleChange}
        />
        <span className="material-icons">search</span>
      </div>
      <div>
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
      </div>
    </form>
  );
};

export default Search;
