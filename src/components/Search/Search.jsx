import React, { useState } from "react";
import weatherData from "../../axios";
import { UilSearch } from "@iconscout/react-unicons";
import styles from "./Search.module.scss";

const Search = () => {
  const [search, setSearch] = useState("");

  const getWeatherData = async () => {
    try {
      const data = await weatherData(search);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.search_wrapper}>
      <input
        type="text"
        placeholder="Search for a city..."
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
      />
      <UilSearch
        size={26}
        color="#fff"
        className={styles.search_icon}
        onClick={() => getWeatherData()}
      />
    </div>
  );
};

export default Search;
