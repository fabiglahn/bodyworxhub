import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import HomeCards from "../../Components/HomeCards/HomeCards";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { User } from "../../types";

function Home(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const email = localStorage.getItem("Current user");

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`api/users/${email}`);
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        <span className={styles.hola}>Hola, </span>
        <span className={styles.name}> {user?.firstname} </span>
      </p>
      <HomeCards />
      <NavigationBar activeLink={"home"} />
    </div>
  );
}

export default Home;
