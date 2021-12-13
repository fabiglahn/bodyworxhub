import React from "react";
import styles from "./MondayOnline.module.css";
import AddClassOnline from "../../Components/AddClassOnline/AddClassOnline";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

function MondayOnline(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>
        <a href="./Outdoor" className={styles.arrow}>
          <span>←</span>
        </a>
        <span className={styles.weekday}>Monday </span>
        <span className={styles.location}>Online</span>
      </p>
      <div className={styles.classes}>
        <AddClassOnline />
      </div>
      <a href="/monday-outdoor" className={styles.outdoorLink}>
        change to outdoor classes
      </a>
      <NavigationBar activeLink={"online"} />
    </div>
  );
}

export default MondayOnline;
