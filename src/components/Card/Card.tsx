import styles from "./Card.module.scss";

interface cardInterface {
  cardName: string;
  expiry: string;
}

const Card: React.FC<cardInterface> = ({ cardName, expiry }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{cardName}</h2>
      <div className={styles.divider} />
      <p className={styles.exp}>{expiry}</p>
    </div>
  );
};

export default Card;
