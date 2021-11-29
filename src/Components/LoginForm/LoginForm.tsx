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
      <label className={styles.submit}>
        <input type="submit" value="login" className={styles.logintext} />
        <input type="submit" value="→" className={styles.login} />
      </label>
    </form>
  );
}

export default LoginForm;
