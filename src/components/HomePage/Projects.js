import styles from "./Projects.module.css";
import ProjectTile from "./ProjectTile";
const Projects = () => {
  return (
    <div className={`${styles.tiles}`}>
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </div>
  );
};

export default Projects;
