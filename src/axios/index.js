import axios from "axios";
import { DateTime } from "luxon";

const API_KEY = "e0b35b0c0eae6a2ba3f0c480ddf27339";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const getWeatherData = async (infoType, searchParams) => {
//   const url = `${BASE_URL}${infoType}`;
//   const params = { ...searchParams, appid: API_KEY };

//   try {
//     const response = await axios.get(url, { params });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// const formatCurrentWeather = (data) => {
//   const {
//     coord: { lat, lon },
//     main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
// name,
// dt,
// sys: { country, sunrise, sunset },
// weather,
// wind: { speed },
//   } = data;

//   const { main: details, icon } = weather[0];

//   return {
// lat,
// lon,
// temp,
// feels_like,
// temp_min,
// temp_max,
// humidity,
// pressure,
// name,
// dt,
// country,
// sunrise,
// sunset,
// details,
// icon,
// speed,
//   };
// };

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 7).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 7).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });
//   return { timezone, daily, hourly };
// };

// const getFormattedData = async (searchParams) => {
//   try {
//     const formattedCurrentWeather = await getWeatherData(
//       "weather",
//       searchParams
//     );

//     // return formattedCurrentWeather ///need to deletr

//     const { lat, lon } = formatCurrentWeather(formattedCurrentWeather);

//     const formattedForecastWeather = await getWeatherData("onecall", {
//       lat,
//       lon,
//       exclude: "current,minutely,alerts",
//       appid: API_KEY,
//     });

//     return { ...formattedCurrentWeather, ...formattedForecastWeather };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "cccc, dd LLL yyyy '| Local time: hh:mm a'"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// export default getFormattedData;

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
    units: "metric",
  });

  console.log(url);
  return fetch(url).then((res) => res.json());

  // const url = new URL(`${BASE_URL}/${infoType}`);
  // const params = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // try {
  //   const response = await fetch(`${url}?${params}`);
  //   return response.json();
  // } catch (error) {
  //   throw error;
  // }
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

// const formatForecastWeather = (data) => {
//   console.log("Data received in formatForecastWeather:", data);
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 7).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 7).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp,
//       icon: d.weather[0].icon,
//     };
//   });
//   return { timezone, daily, hourly };
// };

const getFormattedData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  // const { lat, lon } = formattedCurrentWeather;

  // const formattedForecastWeather = await getWeatherData("onecall", {
  //   lat,
  //   lon,
  //   exclude: "current, minutely, alerts",
  // }).then(formatForecastWeather);

  // return { ...formattedCurrentWeather, ...formattedForecastWeather };
  return formattedCurrentWeather;
};

const getIconFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatToLocalTime = (secs, zone, format = "cccc, dd, LLL yyyy") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedData;

export { formatToLocalTime, getIconFromCode };
