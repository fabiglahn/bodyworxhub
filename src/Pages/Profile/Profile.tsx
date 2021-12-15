import React from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture";
import styles from "./Profile.module.css";

function Profile(): JSX.Element {
  return (
    <article className={styles.container}>
      <h2 className={styles.headline}>Profile</h2>
      <ProfilePicture />
      <h3 className={styles.name}>Anna Wohlrab</h3>
      <div className={styles.stats}>
        <span className={styles.statsHeadline}>Check-Ins</span>
        <span className={styles.statsHeadline}>Booked</span>
        <span className={styles.statsNumbers}>77</span>
        <span className={styles.statsNumbers}>1</span>
      </div>
      <h4 className={styles.booked}>Booked classes</h4>
      <ClassCard />
      <NavigationBar activeLink={"profile"} />
    </article>
  );
}

export default Profile;
