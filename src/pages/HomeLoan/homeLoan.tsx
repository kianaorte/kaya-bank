import NavBar from "../../components/Navbar/Navbar";
import styles from "./homeLoan.module.scss";

const HomeLoan: React.FC = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <h1>Home Loans</h1>
    </div>
  );
};

export default HomeLoan;
