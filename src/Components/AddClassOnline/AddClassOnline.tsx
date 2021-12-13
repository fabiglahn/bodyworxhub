import styles from "./AddClassOnline.module.css";
import Clock from "./assets/clock.svg";
import Location from "./assets/location.svg";
import Plus from "./assets/plus.svg";

const classes = [
  { name: "abs & booty camp", time: " 13:00", place: " online" },
  { name: "quick weight circuit", time: " 18:00", place: " online" },
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
                <img src={Clock} alt="Clock Icon" />
                {time}
              </span>
              <span className={styles.info}>
                <img src={Location} alt="Location Icon" /> {place}
              </span>
            </div>
            <a href="./profile">
              <img src={Plus} alt="Add Icon" />
            </a>
          </div>
        </article>
      ))}
    </>
  );
}
