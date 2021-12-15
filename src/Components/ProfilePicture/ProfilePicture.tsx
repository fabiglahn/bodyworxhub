import React from "react";
import styles from "./ProfilePicture.module.css";
import anna from "./assets/anna.png";
import camera from "./assets/camera.svg";

function ProfilePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={anna} alt="profile picture" className={styles.profilepic} />
        <img src={camera} alt="add new picture" className={styles.camera} />
      </div>
    </div>
  );
}

export default ProfilePicture;
