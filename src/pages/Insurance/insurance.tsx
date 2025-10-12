import NavBar from "../../components/Navbar/Navbar";
import styles from "./insurance.module.scss";

const Insurance: React.FC = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <h1>Insurance</h1>
    </div>
  );
};

export default Insurance;
