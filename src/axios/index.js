import { DateTime } from "luxon";

const API_KEY = "e0b35b0c0eae6a2ba3f0c480ddf27339";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
    units: "metric",
  });

  console.log(url);
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

const getIconFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatToLocalTime = (secs, zone, format = "cccc, dd, LLL yyyy") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedData;

export { formatToLocalTime, getIconFromCode };
