import React from "react";
import styles from "./Login.module.css";
import LoginForm from "../../Components/LoginForm/LoginForm";
import logo from "../../Assets/logo.png";

function Login(): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
      <LoginForm />
    </div>
  );
}

export default Login;
