import styles from "./Projects.module.css";

const ProjectTile = () => {
  return (
    <div className={`${styles.tile}`}>
      <p>Nome del progetto</p>
      <button>Qualcosa di importante</button>
    </div>
  );
};

export default ProjectTile;
