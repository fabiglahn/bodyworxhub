import React from "react";
import { Link } from "react-router-dom";
import styles from "./WeekdayCardsOnline.module.css";

function WeekdayCardsOnline() {
  return (
    <div className={styles.cards}>
      <Link to="/monday-online">
        <div className={styles.singlecard}>
          <h4 className={styles.day}>Monday</h4>
        </div>
      </Link>
      <div className={styles.singlecard}>
        <h4 className={styles.day}>Tuesday</h4>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.day}>Wednesday</h4>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.day}>Thursday</h4>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.day}>Friday</h4>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.day}>Saturday</h4>
      </div>
    </div>
  );
}

export default WeekdayCardsOnline;
