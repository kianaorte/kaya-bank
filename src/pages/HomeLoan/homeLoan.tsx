import Lottie from "react-lottie";
import NavBar from "../../components/Navbar/Navbar";
import Panel from "../../components/Panel/Panel";
import styles from "../../pages/pages.module.scss";

import animationData from "../../assets/HomeLoan.json";

const hLContent = {
  title: "Looking to get a new home?",
  content:
    "At Kaya Bank, we make it easier than ever to buy your dream home. Whether you’re a first-time buyer or a seasoned homeowner, we offer competitive rates on both fixed and adjustable-rate mortgages.",
  content2:
    " Our application process is fast and simple — get pre-approved in minutes and lock in the best possible rates. Choose from a range of terms (10–30 years) and loan types, including FHA and jumbo loans. With minimal paperwork and expert guidance, you can feel confident every step of the way.",
};

const HomeLoan: React.FC = () => {
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
        <h1>Home Loans</h1>
        <div className={styles.hlPanel}>
          <Panel
            title={hLContent.title}
            content={hLContent.content}
            content2={hLContent.content2}
          />
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
