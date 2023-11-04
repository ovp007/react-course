import React from "react";
import styles from "./CityItem.module.css";
import { NavLink } from "react-router-dom";

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
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
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={styles.cityItem}
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
