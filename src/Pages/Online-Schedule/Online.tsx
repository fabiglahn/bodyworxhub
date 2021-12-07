import React from "react";
import styles from "./Online.module.css";
import WeekdayCards from "../../Components/WeekdayCards/WeekdayCards";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

function Outdoor(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>
        <span className={styles.headlinefirst}>Online </span>
        <span className={styles.headlinesecond}>Schedule</span>
      </p>
      <WeekdayCards />
      <NavigationBar activeLink={"online"} />
    </div>
  );
}

export default Outdoor;
