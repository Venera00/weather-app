import axios from "axios";

const API_KEY = "e0b35b0c0eae6a2ba3f0c480ddf27339";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

const weatherData = async (cityname) => {
  try {
    const response = await axios.get(
      BASE_URL + `q=${cityname}&appid=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default weatherData;
