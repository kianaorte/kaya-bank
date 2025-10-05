interface PanelInterface {
  title?: string;
  content: string;
}

const Panel: React.FC<PanelInterface> = ({ title, content }) => {
  return (
    <div>
      <h2> {title} </h2>
      <p> {content} </p>
    </div>
  );
};

export default Panel;
