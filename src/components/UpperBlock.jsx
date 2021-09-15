import React, { useState } from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { fetchWeather } from "../redux/features/weather";
import { useDispatch } from "react-redux";
import clsx from "clsx";

const useStyles = makeStyles((Theme) => ({
  tempVariant: {
    display: "flex",
    justifyContent: "flex-end",
  },
  input: {
    width: 220,
  },
  button: {
    height: 25,
    backgroundColor: "#18a0fb",
    color: "white",
    border: "1px solid white",
  },
  buttonActive: {
    height: 25,
    backgroundColor: "#95E3F1",
    color: "white",
    border: "1px solid white",
  },
  height: {
    height: 60,
  },
  O: {
    marginRight: 10,
  },
  city: {
    fontSize: 30,
  },
}));

function UpperBlock({ item, setC, setF, open, setOpen, C, F }) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handlePressKey = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      dispatch(fetchWeather(input));
      setOpen(false);
    }
  };

  const handleClickC = () => {
    setC(true);
    setF(false);
  };

  const handleClickF = () => {
    setC(false);
    setF(true);
  };

  return (
    <div className="row">
      <div className={`col-6 ${classes.height}`} onKeyPress={handlePressKey}>
        {open ? (
          <input
            className={classes.input}
            type="text"
            onChange={handleChange}
            placeholder="Нажмите inter после ввода"
          />
        ) : (
          <>
            {item.name ? (
              <div className={classes.city}>{item?.name}</div>
            ) : (
              "Город не установлен"
            )}
            <div onClick={() => setOpen(true)}>Сменить город</div>
          </>
        )}
      </div>
      <div className={`col-6 ${classes.tempVariant}`}>
        <span className={classes.O}>°</span>
        <ButtonGroup
          size="small"
          disableElevation
          variant="contained"
          color="blue"
        >
          <Button
            className={clsx(classes.button, {
              [classes.buttonActive]: C,
            })}
            onClick={handleClickC}
          >
            C
          </Button>
          <Button
            className={clsx(classes.button, {
              [classes.buttonActive]: F,
            })}
            onClick={handleClickF}
          >
            F
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
export default UpperBlock;
