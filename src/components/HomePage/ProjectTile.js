import styles from "./Projects.module.css";

const ProjectTile = ({ projectInfo = {} }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.thumbnail}>
        <img src={projectInfo.thumbnail} alt="project-thumbnail" />
      </div>
      <div className={styles.description}>
        <h3>{projectInfo.name}</h3>
        <p>{projectInfo.description}</p>
        <div></div>
        <button>Give it a look!</button>
      </div>
    </div>
  );
};

export default ProjectTile;
