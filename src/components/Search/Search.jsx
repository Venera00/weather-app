import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import styles from "./Search.module.scss";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("CLiked enter");
    }
  };

  return (
    <div className={styles.search_wrapper}>
      <input
        type="text"
        placeholder="Search for a city..."
        className={styles.input}
        onChange={(e) => setSearchQuery(e.target.value)}
        // onKeyDownCapture={handleEnter}
      />
      <UilSearch
        size={26}
        color="#fff"
        className={styles.search_icon}
        // onClick={() => getWeatherData()}
      />
    </div>
  );
};

export default Search;
