import Card from "../../components/Card/Card";
import Panel from "../../components/Panel/Panel";
import styles from "./home.module.scss";
import React from "react";

const cardContent = [
  {
    cardName: "Meowster Card",
    expiry: "Exp 12/46",
  },
  {
    cardName: "Kibble Kard",
    expiry: "Exp 01/28",
  },
];

const Home: React.FC = () => {
  const [catCoins, setCatCoins] = React.useState(0);

  const getCoins = () => {
    return "You have a balance of " + catCoins + " cat coins 🐱";
  };

  return (
    <div className={styles.home} onClick={() => setCatCoins(catCoins + 1)}>
      <h2>Balance</h2>
      {/* TODO: Fetch balance from backend */}
      <Panel content={getCoins()} />
      <h2>Cards</h2>
      <div className={styles.cardContainer}>
        {cardContent.map((panel, index) => (
          <Card key={index} cardName={panel.cardName} expiry={panel.expiry} />
        ))}
      </div>
    </div>
  );
};

export default Home;
