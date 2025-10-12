import Lottie from "react-lottie";
import NavBar from "../../components/Navbar/Navbar";
import Panel from "../../components/Panel/Panel";
import styles from "../../pages/pages.module.scss";

import animationData from "../../assets/insurance.json";

const insuranceContent = {
  title: "Protection that fits your life",
  content:
    "Life is unpredictable — your coverage shouldn’t be. Kaya Bank offers straightforward home, auto and life policies designed to protect what matters most, with flexible options and simple claims processing. Get a tailored quote in minutes, compare plans side-by-side, and rely on empathetic claims support when you need it most",
};

const Insurance: React.FC = () => {
  const defaultOptions = {
    autoplay: true,
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <h1>Insurance</h1>
        <div className={styles.hlPanel}>
          <Panel
            title={insuranceContent.title}
            content={insuranceContent.content}
          />
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
