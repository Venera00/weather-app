import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search_wrapper}>
      <input
        type="text"
        placeholder="Search for a city..."
        className={styles.input}
      />
      <UilSearch size={26} color="#fff" className={styles.search_icon} />
    </div>
  );
};

export default Search;
