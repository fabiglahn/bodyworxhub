import React from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="email" className={styles.email} />
      <input
        type="password"
        placeholder="password"
        className={styles.password}
      />
      <div className={styles.submit}>
        <input type="submit" value="→" className={styles.login} />
      </div>
    </form>
  );
}

export default LoginForm;
