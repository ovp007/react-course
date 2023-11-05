import React from "react";
import styles from "./CityItem.module.css";
import { NavLink } from "react-router-dom";
import { useCities } from "../contexts/useCities";

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();
  const formatDate = (date) => {
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <li>
      <NavLink
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}> {emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </NavLink>
    </li>
  );
}

export default CityItem;
