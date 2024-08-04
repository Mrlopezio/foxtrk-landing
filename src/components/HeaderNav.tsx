// import React from 'react'
import styles from "./styles/Header.module.scss";
type Props = {};

const HeaderNav = (props: Props) => {
  return (
    <div className={styles.header}>
      <img src="/favicon.svg" alt="" width="28px" height="28px" />
      <h1>FoxTRK</h1>
    </div>
  );
};

export default HeaderNav;
