import React from "react";
import styles from "./Outdoor.module.css";
import WeekdayCards from "../../Components/WeekdayCards/WeekdayCards";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

function Outdoor(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>
        <span className={styles.headlinefirst}>Outdoor </span>
        <span className={styles.headlinesecond}>Schedule</span>
      </p>
      <WeekdayCards />
      <NavigationBar activeLink={"outdoor"} />
    </div>
  );
}

export default Outdoor;
