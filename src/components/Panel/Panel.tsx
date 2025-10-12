import styles from "./Panel.module.scss";

interface PanelInterface {
  content: string;
  content2?: string;
  title?: string;
}

const Panel: React.FC<PanelInterface> = ({ ...props }) => {
  return (
    <div className={styles.panel}>
      <h2> {props.title} </h2>
      <p> {props.content} </p>
      <p> {props.content2} </p>
    </div>
  );
};

export default Panel;
