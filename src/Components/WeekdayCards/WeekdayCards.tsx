import React from "react";
import { Link } from "react-router-dom";
import styles from "./WeekdayCards.module.css";

function WeekdayCards() {
  return (
    <div className={styles.cards}>
      <Link to="/monday-outdoor">
        <div className={styles.singleCard}>
          <h4 className={styles.day}>Monday</h4>
        </div>
      </Link>
      <div className={styles.singleCard}>
        <h4 className={styles.day}>Tuesday</h4>
      </div>
      <div className={styles.singleCard}>
        <h4 className={styles.day}>Wednesday</h4>
      </div>
      <div className={styles.singleCard}>
        <h4 className={styles.day}>Thursday</h4>
      </div>
      <div className={styles.singleCard}>
        <h4 className={styles.day}>Friday</h4>
      </div>
      <div className={styles.singleCard}>
        <h4 className={styles.day}>Saturday</h4>
      </div>
    </div>
  );
}

export default WeekdayCards;
