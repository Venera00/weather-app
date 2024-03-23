import React from "react";
import images from "../../assets/images";
// import {UilArrowUp, } from
import styles from "./WeatherDetails.module.scss";

const WeatherDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.days}>days</div>

      <div className={styles.time}>
        <img src={images.Watch} alt="The watch" />
        <p className={styles.time__title}>8:00PM GMT</p>
      </div>

      <p className={styles.conditions__title}>AIR CONDITIONS</p>

      <div className={styles.conditions}>
        <div className={styles.conditions_wrapper}>
          <img src={images.RealFeelIcon} alt="Temperature" />

          <div className={styles.conditions__info}>
            <p>Real feel</p>
            <span className={styles.index}> 30°</span>
          </div>
        </div>

        <div className={styles.conditions_wrapper}>
          <img src={images.WindIcon} alt="Wind" />
          <div className={styles.conditions__info}>
            <p>Wind</p>
            <span className={styles.index}> 0.8 km/hr</span>
          </div>
        </div>

        <div className={styles.conditions_wrapper}>
          <img src={images.RainIcon} alt="Rain" />
          <div className={styles.conditions__info}>
            <p>Chance of rain</p>
            <span className={styles.index}> 2%</span>
          </div>
        </div>
        <div className={styles.conditions_wrapper}>
          <img src={images.SunIcon} alt="Sun" />
          <div className={styles.conditions__info}>
            <p>UV Index</p>
            <span className={styles.index}> 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
