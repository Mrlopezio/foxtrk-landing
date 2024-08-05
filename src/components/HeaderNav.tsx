// import React from 'react'
import styles from "./styles/Header.module.scss";
type Props = {};

const HeaderNav = (props: Props) => {
  return (
    <div className={styles.header} key="nav">
      <div className={styles["header-nav"]}>
        <img src="/favicon.svg" alt="" width="36px" height="36px" />
        <img src="/foxtrk-logo2.svg" alt="" width="auto" height="36px" />
      </div>
    </div>
  );
};

export default HeaderNav;
