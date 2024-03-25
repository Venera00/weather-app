import { useState, useEffect } from "react";
import getFormattedData from "./axios";
import Search from "./components/Search/Search";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import User from "./components/User/User";
import ActivitiesAndForecast from "./components/ActivitiesAndForecast/ActivitiesAndForecast";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import "./App.css";

function App() {
  const [query, setQuery] = useState({ q: "bishkek" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      await getFormattedData({ ...query }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };

    getWeatherData();
  }, [query]);

  return (
    <>
      <Search />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />

          <div className="main-container">
            <User />
            <ActivitiesAndForecast />
            <WeatherDetails weather={weather} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
