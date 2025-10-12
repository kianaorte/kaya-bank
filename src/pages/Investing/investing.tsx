import Lottie from "react-lottie";
import NavBar from "../../components/Navbar/Navbar";
import Panel from "../../components/Panel/Panel";
import styles from "../../pages/pages.module.scss";

import animationData from "../../assets/investing.json";

const investingContent = {
  title: "Invest with confidence. Grow with purpose",
  content:
    "Start investing on your terms with Meridian’s intuitive platform. Choose from guided portfolios, curated ETFs, or build your own mix — all supported by research, clear fees, and powerful tools to track performance. Whether you’re saving for retirement or testing a new strategy, our educational resources and risk-aware recommendations help you make decisions with clarity",
};

const Investing: React.FC = () => {
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
            title={investingContent.title}
            content={investingContent.content}
          />
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investing;
