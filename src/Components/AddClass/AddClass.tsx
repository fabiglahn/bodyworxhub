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
        <article className={styles.singlecard} key={name}>
          <h4 className={styles.coursename}>{name}</h4>
          <div className={styles.withbutton}>
            <div className={styles.allinfo}>
              <span className={styles.info}>
                <img src={Clock} />
                {time}
              </span>
              <span className={styles.info}>
                <img src={Location} /> {place}
              </span>
            </div>
            <a href="./profile">
              <img src={Plus} />
            </a>
          </div>
        </article>
      ))}
    </>
  );
}
