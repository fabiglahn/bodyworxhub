import React from "react";
import styles from "./WeekdayCards.module.css";

function WeekdayCards() {
  return (
    <div className={styles.cards}>
      <a href="../../Pages/Outdoor-Monday/MondayOutdoor.tsx">
        <div className={styles.singlecard}>
          <h4 className={styles.day}>Monday</h4>
        </div>
      </a>
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

export default WeekdayCards;
