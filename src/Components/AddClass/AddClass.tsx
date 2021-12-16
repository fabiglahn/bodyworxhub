import { Link } from "react-router-dom";
import styles from "./AddClass.module.css";
import Clock from "./assets/clock.svg";
import Location from "./assets/location.svg";
import Plus from "./assets/plus.svg";

const classes = [
  { name: "hiit the rope", time: " 19:00", place: " Plaça del Mar" },
  { name: "cardio combat", time: " 19:00", place: " Joan Miro" },
  { name: "cardio dance jam", time: " 19:30", place: " Arc de Triomf" },
  { name: "power circuit", time: " 20:00", place: " Plaça del Mar" },
  { name: "pilates & tone", time: " 21:30", place: " Studio" },
];

export default function AddClass() {
  return (
    <>
      {classes.map(({ name, time, place }) => (
        <article className={styles.singleCard} key={name}>
          <h4 className={styles.courseName}>{name}</h4>
          <div className={styles.withButton}>
            <div className={styles.allInfo}>
              <span className={styles.info}>
                <img src={Clock} alt="Clock Icon" />
                {time}
              </span>
              <span className={styles.info}>
                <img src={Location} alt="Location Icon" /> {place}
              </span>
            </div>
            <Link to="/profile">
              <img src={Plus} alt="Add Icon" />
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}
