import React, { useState, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { months, days } from "./constants";
import Sign from "./Sign";
import "./select-birthday.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [sign, setSign] = useState();
  const handleMonthChange = (input) => {
    const month = input.target.value;
    setMonth(month);
  };
  const handleDayChange = (input) => {
    const day = input.target.value;
    setDay(day);
  };
  useEffect(() => {
    console.log(month + " " + day);
    if (month && day) {
      setSign(getSign(month, day));
    }
  }, [month, day]);
  const getSign = (month, day) => {
    switch (month) {
      case 1: {
        return day < 20 ? "Capricorn" : "Aquarius";
      }
      case 2: {
        return day < 20 ? "Aquarius" : "Pisces";
      }
      case 3: {
        return day < 21 ? "Pisces" : "Aries";
      }
      case 4: {
        return day < 20 ? "Aries" : "Taurus";
      }
      case 5: {
        return day < 21 ? "Taurus" : "Gemini";
      }
      case 6: {
        return day < 21 ? "Gemini" : "Cancer";
      }
      case 7: {
        return day < 22 ? "Cancer" : "Leo";
      }
      case 8: {
        return day < 23 ? "Leo" : "Virgo";
      }
      case 9: {
        return day < 23 ? "Virgo" : "Libra";
      }
      case 10: {
        return day < 23 ? "Libra" : "Scorpio";
      }
      case 11: {
        return day < 23 ? "Scorpio" : "Sagittarius";
      }
      case 12: {
        return day < 22 ? "Sagittarius" : "Capricorn";
      }
    }
  };

  return (
    <div className="select-birthday">
      <FormControl className={classes.formControl}>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month"
          value={month}
          onChange={handleMonthChange}
        >
          {months.map((month) => {
            return <MenuItem value={month.number}>{month.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="day-select-label">Day</InputLabel>
        <Select
          labelId="day-select-label"
          id="day"
          value={day}
          onChange={handleDayChange}
        >
          {days.map((day) => {
            return <MenuItem value={day}>{day}</MenuItem>;
          })}
        </Select>
      </FormControl>
      {sign && <Sign sign={sign} />}
    </div>
  );
};
