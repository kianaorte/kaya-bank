import React from "react";
import styles from "./Header.module.scss";
import PetsIcon from "/src/assets/paw.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <PetsIcon />
      <h2>Kaya Bank</h2>
      {/* <div className={styles.hContent}>
        <h2>CoolGuy123 😎</h2>
      </div> */}
    </div>
  );
};

export default Header;
