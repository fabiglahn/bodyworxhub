import { Link } from "react-router-dom";
import styles from "./AddClassOnline.module.css";
import clock from "./assets/clock.svg";
import location from "./assets/location.svg";
import plus from "./assets/plus.svg";

const classes = [
  { name: "abs & booty camp", time: " 13:00", place: " online" },
  { name: "weight circuit", time: " 18:00", place: " online" },
];

export default function AddClassOnline() {
  return (
    <>
      {classes.map(({ name, time, place }) => (
        <article className={styles.singleCard} key={name}>
          <h4 className={styles.courseName}>{name}</h4>
          <div className={styles.withButton}>
            <div className={styles.allInfo}>
              <span className={styles.info}>
                <img src={clock} alt="start time" />
                {time}
              </span>
              <span className={styles.info}>
                <img src={location} alt="location" /> {place}
              </span>
            </div>
            <Link to="/profile">
              <img src={plus} alt="add this class" />
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}
