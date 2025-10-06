import Card from "../../components/Card/Card";
import NavBar from "../../components/Navbar/Navbar";
import Panel from "../../components/Panel/Panel";
import SidePanel from "../../components/SidePanel/sidePanel";
import styles from "./home.module.scss";
import React from "react";

//make a card backend thingy as well?
const cardContent = [
  {
    name: "Meowster Card",
    expiry: "Exp 12/46",
    spendingLimits: "420.69",
  },
  {
    name: "Kibble Kard",
    expiry: "Exp 01/28",
    spendingLimits: "1337.42",
  },
];

const Home: React.FC = () => {
  const [catCoins, setCatCoins] = React.useState(0);
  const [openPanel, setOpenPanel] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(0);

  const getCoins = () => {
    return "You have a balance of " + catCoins + " cat coins 🐱";
  };

  return (
    <div className={styles.home}>
      <NavBar />
      <div>
        <h2>Balance</h2>
        {/* TODO: Fetch balance from backend */}
        <div onClick={() => setCatCoins(catCoins + 1)}>
          <Panel content={getCoins()} />
        </div>
        <h2>Cards</h2>
        <div className={styles.cardContainer}>
          {cardContent.map((panel, index) => (
            <>
              <div
                onClick={() => {
                  setOpenPanel(!openPanel);
                  setSelectedCard(index);
                }}
                key={index}
              >
                <Card key={index} cardName={panel.name} expiry={panel.expiry} />
              </div>
            </>
          ))}
        </div>
      </div>
      {openPanel && <SidePanel card={cardContent[selectedCard]} />}
    </div>
  );
};

export default Home;
