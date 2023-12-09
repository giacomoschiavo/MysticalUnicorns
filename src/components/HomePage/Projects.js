import styles from "./Projects.module.css";
import ProjectTile from "./ProjectTile";
import { projectsInfo } from "../../assets/projectsInfo";

const Projects = () => {
  return (
    <section id="projects" className={`${styles.tiles}`}>
      <ProjectTile projectInfo={projectsInfo.poseroyale} />
      <ProjectTile projectInfo={projectsInfo.wwafa} />
    </section>
  );
};

export default Projects;
