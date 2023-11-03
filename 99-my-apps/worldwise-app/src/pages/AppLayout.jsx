import React from "react";
import AppNav from "../components/AppNav";
import Map from "../components/Map";
import styles from "../pages/AppLayout.module.css";
import SideBar from "../components/SideBar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
