import React, { useState } from "react";
import styles from "./Style/Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles["container-header"]}>
        <div className={styles["logo-content"]}>
          CoreSports
        </div>
        <div className={styles["links-content"]}>
            <ul>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
