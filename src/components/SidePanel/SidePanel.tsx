import styles from "./sidePanel.module.scss";

interface SidePanelProps {
  card: {
    name: string;
    expiry: string;
    cardNumber?: string;
    spendingLimits?: string;
    cvv?: string;
  };
}

const SidePanel: React.FC<SidePanelProps> = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <div className={styles.cardDetails}>
          <h3> Name</h3>
          <p> {props.card.name}</p>
        </div>
        {props.card.cardNumber && (
          <div className={styles.cardDetails}>
            <h3> Card Number</h3>
            <p> {props.card.cardNumber}</p>
          </div>
        )}
        {props.card.spendingLimits && (
          <div className={styles.cardDetails}>
            <h3> Spending limits</h3>
            <p> {props.card.spendingLimits}</p>
          </div>
        )}

        <div className={styles.cardDetails}>
          <h3> Expiry</h3>
          <p> {props.card.expiry}</p>
        </div>
        {props.card.cvv && (
          <div className={styles.cardDetails}>
            <h3> CVV</h3>
            <p> {props.card.cvv}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
