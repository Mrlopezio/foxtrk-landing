import React from "react";
import styles from "./styles/SignUp.module.scss";
type Props = {};

const SignUpComponent = (props: Props) => {
  return (
    <div className={styles["signup"]}>
      <form action="">
        <div className={styles["signup-form"]}>
          <div className={styles["signup-form-input"]}>
            <input type="text" placeholder="Introduce your email here..." />
            <button>Sign Up</button>
          </div>
          <small>
            By clicking Sign up, you're confirming that you agree with our Terms
            and Conditions.
          </small>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
