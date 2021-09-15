const initialState = {
  loading: false,
  items: [],
  error: null,
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case "add/weather/pending":
      return {
        loading: true,
        items: [],
      };
    case "add/weather/fulfilled":
      return {
        loading: false,
        items: [action.payload],
      };
    case "add/weather/rejected":
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const fetchWeather = (input) => {
  return async (dispatch) => {
    dispatch({ type: "add/weather/pending" });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2c4c951a13c2f62843876d6140716bee`
      );
      const json = await response.json();
      console.log(json);
      dispatch({ type: "add/weather/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "add/weather/rejected", error: e.toString() });
      console.log(e.toString());
    }
  };
};
