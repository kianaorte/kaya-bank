import styles from "./Navbar.module.scss";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>Home</div>
      <div className={styles.navContent}>Home Loans</div>
      <div className={styles.navContent}>Insurance</div>
      <div className={styles.navContent}>Investing</div>
    </div>
  );
};

export default NavBar;
