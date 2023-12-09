import { CustomButton } from "../CustomButton";
import styles from "./Projects.module.css";

const ProjectTile = ({ projectInfo = {} }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.thumbnail}>
        <img src={projectInfo.thumbnail} alt="project-thumbnail" />
      </div>
      <div className={styles.project}>
        <h2 className={styles.title}>{projectInfo.name}</h2>
        <p className={styles.description}>{projectInfo.description}</p>
        <div></div>
        <CustomButton>Give it a look!</CustomButton>
      </div>
    </div>
  );
};

export default ProjectTile;
