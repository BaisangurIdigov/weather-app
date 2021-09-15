import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeather } from "../redux/features/weather";
import { makeStyles } from "@material-ui/core";
import UpperBlock from "./UpperBlock";
import LowerBlock from "./LowerBlock";

const useStyles = makeStyles((Theme) => ({
  root: {
    backgroundColor: "#18a0fb",
    paddingTop: 80,
    height: "100vh",
    color: "white",
  },
}));

function App() {
  const classes = useStyles();
  const [C, setC] = useState(true);
  const [F, setF] = useState(false);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.items);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {weather.map((item) => {
        return (
          <div className="container" key={item.id}>
            <UpperBlock
              setC={setC}
              setF={setF}
              open={open}
              setOpen={setOpen}
              C={C}
              F={F}
              item={item}
            />
            <LowerBlock C={C} F={F} item={item} setOpen={setOpen} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
