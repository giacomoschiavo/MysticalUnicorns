import styles from "./Projects.module.css";

const ProjectTile = () => {
  return (
    <div className={`${styles.tile}`}>
      <h3>Nome del progetto</h3>
      <button>Qualcosa di importante</button>
    </div>
  );
};

export default ProjectTile;
