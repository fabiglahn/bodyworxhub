import React from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture";
import styles from "./Profile.module.css";

function Profile(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Profile</h2>
      <ProfilePicture />
      <ClassCard />
    </div>
  );
}

export default Profile;
