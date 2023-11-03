import React from "react";
import styles from "./AppNav.module.css";
import CityList from "./CityList";
import CountryList from "./CountryList";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <NavLink to="cities">Cities</NavLink>
        <NavLink to="coutries">Coutries</NavLink>
      </ul>
    </div>
  );
}

export default AppNav;
