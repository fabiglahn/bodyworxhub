import React from "react";
import styles from "./Online.module.css";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import WeekdayCardsOnline from "../../Components/WeekdayCardsOnline/WeekdayCardsOnline";

function Outdoor(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>
        <span className={styles.headlineFirst}>Online </span>
        <span className={styles.headlineSecond}>Schedule</span>
      </p>
      <WeekdayCardsOnline />
      <NavigationBar activeLink={"online"} />
    </div>
  );
}
export default Outdoor;
