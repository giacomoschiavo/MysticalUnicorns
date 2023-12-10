import { CustomButton } from "../CustomButton";
import styles from "./Projects.module.css";
import { MovingBackground } from "../MovingBackground";

const ProjectTile = ({ projectInfo = {} }) => {
  return (
    <a className={styles.tile} href={projectInfo.link}>
      <MovingBackground src={projectInfo.background} />
      <MovingBackground src={projectInfo.thumbnail} animated={false} />
      <div className={styles.project}>
        <h2 className={styles.title}>{projectInfo.name}</h2>
        <p className={styles.description}>{projectInfo.description}</p>
        <div></div>
        <CustomButton>Give it a look!</CustomButton>
      </div>
    </a>
  );
};

export default ProjectTile;
