import React from "react";
import { UilMapMarker } from "@iconscout/react-unicons";
import styles from "./TimeAndLocation.module.scss";
import images from "../../assets/images";
import { formatToLocalTime, getIconFromCode } from "../../axios";

const TimeAndLocation = ({
  weather: { dt, timezone, name, country, details, temp, icon },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.time_wrapper}>
        <div className={styles.location_container}>
          <UilMapMarker size="30" color="#fff" />
          <p className={styles.location__title}>{`${name} | ${country}`}</p>
        </div>
        <p className={styles.weather_type}>{details}</p>
        <p className={styles.weather__temperature}>{temp.toFixed()}°C</p>
        <p className={styles.time}>{formatToLocalTime(dt, timezone)}</p>
        {/* //Sunday | 12 Dec 2023 */}
      </div>

      <div className={styles.weathertype_img}>
        <img
          src={getIconFromCode(icon)}
          alt="The weather image"
          className={styles.weather_icon}
        />
      </div>
    </div>
  );
};

export default TimeAndLocation;
