import { useState } from "react";
import Search from "./components/Search/Search";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import User from "./components/User/User";
import ActivitiesAndForecast from "./components/ActivitiesAndForecast/ActivitiesAndForecast";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import "./App.css";

function App() {
  return (
    <>
      <Search />

      <TimeAndLocation />

      <div className="main-container">
        <User />
        <ActivitiesAndForecast />
        <WeatherDetails />
      </div>
    </>
  );
}

export default App;
