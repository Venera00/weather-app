import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import styles from "./Search.module.scss";

const Search = ({ setQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery !== "") {
      setQuery({ q: searchQuery });
      setSearchQuery("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.search_wrapper}>
      <input
        type="text"
        placeholder="Search for a city..."
        className={styles.input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={handleSearch}
        onKeyDownCapture={handleEnter}
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
