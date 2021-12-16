import React from "react";
import styles from "./MondayOutdoor.module.css";
import AddClass from "../../Components/AddClass/AddClass";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

function MondayOutdoor(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>
        <Link to="/Outdoor" className={styles.arrow}>
          <span>←</span>
        </Link>
        <span className={styles.weekday}>Monday </span>
        <span className={styles.location}>Outdoor</span>
      </p>
      <div className={styles.classes}>
        <AddClass />
      </div>
      <NavigationBar activeLink={"outdoor"} />
    </div>
  );
}

export default MondayOutdoor;
