import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((Theme) => ({
  temp: {
    display: "flex",
    justifyContent: "center",
    height: 600,
    alignItems: "center",
    fontSize: 160,
    color: "white",
  },
  colItems: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

function LowerBlock({ item, F, C, setOpen }) {
  const classes = useStyles();
  const handleTemp = (temp) => {
    if (C) {
      return (temp - 273.15).toFixed(0);
    }
    if (F) {
      return (((temp - 273.15) * 9) / 5 + 32).toFixed(0);
    }
  };

  return (
    <>
      <div onClick={() => setOpen(false)} className={`col-12 ${classes.temp}`}>
        {item.main ? handleTemp(item?.main?.temp) : 0}°
      </div>
      <div className="row">
        <div className={`col-3 ${classes.colItems}`}>
          Ветер
          <br />
          {item.wind ? item?.wind?.speed : 0} м/с
        </div>
        <div className={`col-3 ${classes.colItems}`}>
          Давление
          <br />
          {item.main ? item?.main?.pressure : 0} мм рт.ст.
        </div>
        <div className={`col-3 ${classes.colItems}`}>
          Влажность
          <br />
          {item.main ? item?.main?.humidity : 0}%
        </div>
        <div className={`col-3 ${classes.colItems}`}>
          Вероятность дождя
          <br />
          {item.clouds ? item?.clouds?.all : 0}%
        </div>
      </div>
    </>
  );
}

export default LowerBlock;
