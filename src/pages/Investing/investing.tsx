import NavBar from "../../components/Navbar/Navbar";
import styles from "./investing.module.scss";

const Investing: React.FC = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <h1>Investing</h1>
    </div>
  );
};

export default Investing;
