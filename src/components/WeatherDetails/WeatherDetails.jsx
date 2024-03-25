import React from "react";
import images from "../../assets/images";
// import {UilArrowUp, } from
import styles from "./WeatherDetails.module.scss";
import { formatToLocalTime } from "../../axios";

const WeatherDetails = ({
  weather: { feels_like, speed, humidity, temp_max, dt },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.days}>days</div>

      <div className={styles.time}>
        <img src={images.Watch} alt="The watch" />
        <p className={styles.time__title}>{formatToLocalTime(dt)}</p>
      </div>

      <p className={styles.conditions__title}>AIR CONDITIONS</p>

      <div className={styles.conditions}>
        <div className={styles.conditions_wrapper}>
          <img src={images.RealFeelIcon} alt="Temperature" />

          <div className={styles.conditions__info}>
            <p>Real feel</p>
            <span className={styles.index}>{feels_like.toFixed()}°</span>
          </div>
        </div>

        <div className={styles.conditions_wrapper}>
          <img src={images.WindIcon} alt="Wind" />
          <div className={styles.conditions__info}>
            <p>Wind</p>
            <span className={styles.index}> {speed} km/hr</span>
          </div>
        </div>

        <div className={styles.conditions_wrapper}>
          <img src={images.RainIcon} alt="Rain" />
          <div className={styles.conditions__info}>
            <p>Humidity</p>
            <span className={styles.index}> {humidity}%</span>
          </div>
        </div>
        <div className={styles.conditions_wrapper}>
          <img src={images.SunIcon} alt="Sun" />
          <div className={styles.conditions__info}>
            <p>Max temp</p>
            <span className={styles.index}> {temp_max.toFixed()}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
