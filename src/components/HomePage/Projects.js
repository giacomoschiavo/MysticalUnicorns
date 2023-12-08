import styles from "./Projects.module.css";
import ProjectTile from "./ProjectTile";
const Projects = () => {
  return (
    <section className={`${styles.tiles}`}>
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </section>
  );
};

export default Projects;
