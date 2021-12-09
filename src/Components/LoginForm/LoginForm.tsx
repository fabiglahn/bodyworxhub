import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { verifyLogin } from "../../utils/api";
import { User } from "../../types";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: Partial<User> = { email, password };
    await verifyLogin(user);
    navigate("/home");
    console.log(user);
  }

  function validateForm() {
    return email.trim().length > 0 && password.trim().length > 0;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <input
          type="text"
          required
          placeholder="email"
          className={styles.email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="password"
          className={styles.password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className={styles.forgot}>Forgot your password?</span>
      </div>
      <label className={styles.submit}>
        <input
          type="submit"
          value="login"
          className={styles.logintext}
          disabled={!validateForm()}
        />
        <input
          type="submit"
          value="→"
          className={styles.login}
          disabled={!validateForm()}
        />
      </label>
      <div className={styles.register}>
        <span className={styles.account}>You don’t have an account yet?</span>
        <span className={styles.here}>Register here.</span>
      </div>
    </form>
  );
}

export default LoginForm;
