import { CustomButton } from "../CustomButton";
import styles from "./Projects.module.css";
import { MovingBackground } from "../MovingBackground";
import { FiExternalLink } from "react-icons/fi";

const ProjectTile = ({ projectInfo = {} }) => {
  const { name, description, link, background, thumbnail, position } =
    projectInfo;

  return (
    <a className={styles.tile} href={link}>
      <MovingBackground src={background} position={position} />
      <MovingBackground src={thumbnail} animated={false} position={position} />
      <div className={styles.project}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div></div>
        <FiExternalLink className={styles.icon} />
      </div>
    </a>
  );
};

export default ProjectTile;
