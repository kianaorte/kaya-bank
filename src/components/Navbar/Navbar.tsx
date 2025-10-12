import styles from "./Navbar.module.scss";

import HomeIcon from "../../assets/home.svg";
import PawIcon from "../../assets/paw.svg";
import StockIcon from "../../assets/stocks.svg";
import SunHouseIcon from "../../assets/sunHouse.svg";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <button onClick={() => navigate("/")} className={styles.navItem}>
        <HomeIcon />
        <div className={styles.navContent}>Home</div>
      </button>
      <button onClick={() => navigate("/home-loan")} className={styles.navItem}>
        <SunHouseIcon />
        <div className={styles.navContent}>Home Loans</div>
      </button>
      <button onClick={() => navigate("/insurance")} className={styles.navItem}>
        <PawIcon />
        <div className={styles.navContent}>Insurance</div>
      </button>
      <button onClick={() => navigate("/investing")} className={styles.navItem}>
        <div className={styles.navItem}>
          <StockIcon />
          <div className={styles.navContent}>Investing</div>
        </div>
      </button>
    </div>
  );
};

export default NavBar;
