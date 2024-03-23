import React from "react";
import { UilMapMarker } from "@iconscout/react-unicons";
import styles from "./TimeAndLocation.module.scss";

const TimeAndLocation = () => {
  return (
    <div className={styles.time_wrapper}>
      <div className={styles.location_container}>
        <UilMapMarker size="30" color="#fff" />
        <p className={styles.location__title}>Berlin</p>
      </div>

      <p className={styles.weather_type}>Cloudy</p>

      <p className={styles.time}>Sunday | 12 Dec 2023</p>
    </div>
  );
};

export default TimeAndLocation;
