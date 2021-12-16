import React from "react";
import styles from "./MondayOnline.module.css";
import AddClassOnline from "../../Components/AddClassOnline/AddClassOnline";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

function MondayOnline(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>
        <Link to="/Online" className={styles.arrow}>
          <span>←</span>
        </Link>
        <span className={styles.weekday}>Monday </span>
        <span className={styles.location}>Online</span>
      </p>
      <div className={styles.classes}>
        <AddClassOnline />
      </div>
      <Link to="/monday-outdoor" className={styles.outdoorLink}>
        change to outdoor classes
      </Link>
      <NavigationBar activeLink={"online"} />
    </div>
  );
}

export default MondayOnline;
