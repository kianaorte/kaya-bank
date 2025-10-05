import styles from "./Panel.module.scss";

interface PanelInterface {
  title?: string;
  content: string;
}

const Panel: React.FC<PanelInterface> = ({ title, content }) => {
  return (
    <div className={styles.panel}>
      <h2> {title} </h2>
      <p> {content} </p>
    </div>
  );
};

export default Panel;
