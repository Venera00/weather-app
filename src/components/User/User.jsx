import React from "react";
import images from "../../assets/images";
import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.user}>
      <div>
        <img src={images.User} alt="User icon" />
      </div>

      <div className={styles.details}>
        <div className={styles.details_wrapper}>
          <img
            src={images.weatherImg}
            alt="Weather icon"
            className={styles.details__img}
          />
          <p className={styles.details__title}>weather</p>
        </div>

        <div className={styles.details_wrapper}>
          <img
            src={images.Explore}
            alt="Compass icon"
            className={styles.details__img}
          />
          <p className={styles.details__title}>explore</p>
        </div>

        <div className={styles.details_wrapper}>
          <img
            src={images.Location}
            alt="Map icon"
            className={styles.details__img}
          />
          <p className={styles.details__title}>cities</p>
        </div>

        <div className={styles.details_wrapper}>
          <img
            src={images.Settings}
            alt="Settings icon"
            className={styles.details__img}
          />
          <p className={styles.details__title}>settings</p>
        </div>
      </div>
    </div>
  );
};

export default User;
