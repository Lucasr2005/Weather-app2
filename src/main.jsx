import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { currentDayReducer } from "./reducers/currentDayReducer.js";
import { nextDaysReducer } from "./reducers/nextDaysReducer.js";
const reducers = {
  currentDay: currentDayReducer,
  nextDays: nextDaysReducer,
};
const store = createStore(combineReducers(reducers));
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
