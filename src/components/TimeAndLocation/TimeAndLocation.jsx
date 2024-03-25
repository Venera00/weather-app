import React from "react";
import { UilMapMarker } from "@iconscout/react-unicons";
import styles from "./TimeAndLocation.module.scss";
import images from "../../assets/images";

const TimeAndLocation = ({
  weather: { dt, timezone, name, country, details },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.time_wrapper}>
        <div className={styles.location_container}>
          <UilMapMarker size="30" color="#fff" />
          <p className={styles.location__title}>{`${name} | ${country}`}</p>
        </div>
        <p className={styles.weather_type}>Cloudy</p>
        <p className={styles.weather__temperature}>26°C</p>
        <p className={styles.time}>Sunday | 12 Dec 2023</p>
        {/* //Sunday | 12 Dec 2023 */}
      </div>

      <div className={styles.weathertype_img}>
        <img src={images.Cloud} alt="The cloud" />
      </div>
    </div>
  );
};

export default TimeAndLocation;
