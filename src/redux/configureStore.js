import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import weather from './features/weather'

export const store = createStore(
  combineReducers({
    weather
  }),
  composeWithDevTools(applyMiddleware(thunk))
);