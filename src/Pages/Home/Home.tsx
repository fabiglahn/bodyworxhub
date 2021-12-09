import React from "react";
import styles from "./Home.module.css";
import HomeCards from "../../Components/HomeCards/HomeCards";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        <span className={styles.hola}>Hola, </span>
        <span className={styles.name}>Anna!</span>
      </p>
      <HomeCards />
      <NavigationBar activeLink={"home"} />
    </div>
  );
}

export default Home;
