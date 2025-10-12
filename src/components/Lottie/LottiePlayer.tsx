import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/HomeLoan.json";

const LottiePlayer: React.FC = () => {
  const defaultOptions = {
    autoplay: true,
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottiePlayer;
