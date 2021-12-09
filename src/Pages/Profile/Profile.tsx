import React from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture";
import styles from "./Profile.module.css";

function Profile(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Profile</h2>
      <ProfilePicture />
      <h3 className={styles.name}>Anna Wohlrab</h3>
      <div className={styles.stats}>
        <span className={styles.stats_headline}>Check-Ins</span>
        <span className={styles.stats_headline}>Booked</span>
        <span className={styles.stats_numbers}>77</span>
        <span className={styles.stats_numbers}>1</span>
      </div>
      <h4 className={styles.booked}>Booked classes</h4>
      <ClassCard />
      <NavigationBar activeLink={"profile"} />
    </div>
  );
}

export default Profile;
