import React from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <input type="text" placeholder="email" className={styles.email} />
        <input
          type="password"
          placeholder="password"
          className={styles.password}
        />
      </div>
      <div className={styles.submit}>
        <span className={styles.logintext}>login</span>
        <input type="submit" value="→" className={styles.login} />
      </div>
    </form>
  );
}

export default LoginForm;
