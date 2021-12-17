import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { verifyLogin } from "../../utils/api";
import { User } from "../../types";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: Partial<User> = { email, password };
    verifyLogin(user)
      .then(() => {
        localStorage.setItem("Current user", email);
        navigate("/home");
      })
      .catch((error) => {
        setError(error);
      });
  }

  function validateForm() {
    return email.trim().length > 0 && password.trim().length > 0;
  }

  const loginform = (
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
        <span className={styles.error}>{error}</span>
        <span className={styles.forgot}>Forgot your password?</span>
      </div>
      <label className={styles.submit}>
        <input
          type="submit"
          value="login"
          className={styles.loginText}
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

  return loginform;
}

export default LoginForm;
