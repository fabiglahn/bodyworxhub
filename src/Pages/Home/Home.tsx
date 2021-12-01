import react from "react";
import styles from "./Home.module.css";
import HomeCards from "../../Components/HomeCards/HomeCards";

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        <span className={styles.hola}>Hola, </span>
        <span className={styles.name}>Anna!</span>
      </p>
      <HomeCards />
    </div>
  );
}

export default Home;
