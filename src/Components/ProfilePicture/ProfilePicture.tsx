import React from "react";
import styles from "./ProfilePicture.module.css";
import anna from "./assets/anna.png";
import camera from "./assets/camera.svg";

function ProfilePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={anna} className={styles.profilepic} />
        <img src={camera} className={styles.camera} />
      </div>
    </div>
  );
}

export default ProfilePicture;
