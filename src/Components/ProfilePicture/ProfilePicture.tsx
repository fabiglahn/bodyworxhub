import React from "react";
import styles from "./ProfilePicture.module.css";
import anna from "./assets/anna.png";
import CameraIcon from "./assets/camera";

function ProfilePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.stripe}> </div>
      <img src={anna} />
      <div className={styles.camera}>
        <CameraIcon />
      </div>
    </div>
  );
}

export default ProfilePicture;
