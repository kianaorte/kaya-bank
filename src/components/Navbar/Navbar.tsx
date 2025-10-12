import styles from "./Navbar.module.scss";

import HomeIcon from "../../assets/home.svg";
import PawIcon from "../../assets/paw.svg";
import StockIcon from "../../assets/stocks.svg";
import SunHouseIcon from "../../assets/sunHouse.svg";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.navItem}>
        <HomeIcon />
        <div className={styles.navContent}>Home</div>
      </NavLink>
      <NavLink to="/home-loan" className={styles.navItem}>
        <SunHouseIcon />
        <div className={styles.navContent}>Home Loans</div>
      </NavLink>
      <NavLink to="/insurance" className={styles.navItem}>
        <PawIcon />
        <div className={styles.navContent}>Insurance</div>
      </NavLink>
      <NavLink to="/investing" className={styles.navItem}>
        <div className={styles.navItem}>
          <StockIcon />
          <div className={styles.navContent}>Investing</div>
        </div>
      </NavLink>
    </div>
  );
};

export default NavBar;
