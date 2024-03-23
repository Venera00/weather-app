import React from "react";
import images from "../../assets/images";
import styles from "./ActivitiesAndForecast.module.scss";

const ActivitiesAndForecast = () => {
  return (
    <div className={styles.container}>
      <div className={styles.activities}>
        <div className={styles.activities_header}>
          <img src={images.Heart} alt="The white heart" />
          <p className={styles.activities__title}>Activities in your area</p>
        </div>

        <div className={styles.activities_content}>
          <div className={styles.content_wrapper}>
            <img src={images.Forest} alt="The forest" />
            <p className={styles.activities__subtitle}>2km away</p>
          </div>
          <div className={styles.content_wrapper}>
            <img src={images.Park} alt="The park" />
            <p className={styles.activities__subtitle}>1.5km away</p>
          </div>
          <div className={styles.content_wrapper}>
            <img src={images.Pool} alt="The pool" />
            <p className={styles.activities__subtitle}>3km away</p>
          </div>
          <div className={styles.content_wrapper}>
            <img src={images.Oasis} alt="The forest" />
            <p className={styles.activities__subtitle}>500m away</p>
          </div>
        </div>
      </div>

      <div className={styles.forecast}>
        <div className={styles.forecast__header}>
          <img src={images.Watch} alt="The watch" />
          <p className={styles.forecast__title}>24-hour forecast</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesAndForecast;
