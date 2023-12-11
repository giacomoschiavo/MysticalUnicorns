import profilepic from "../../assets/sas.jpg";
import styles from "./Intro.module.css";
import bgintro from "../../assets/bgintro.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CustomButton } from "../CustomButton";
import { MovingBackground } from "../MovingBackground";
import { MdOutlineMail } from "react-icons/md";

const Intro = () => {
  return (
    <section className={`${styles.intro} flex-row`}>
      <div className={`${styles.introLeft} flex-column`}>
        <MovingBackground src={bgintro} alt="bg-intro" />
        <h1 className={styles.title}>
          Hello, I’m Giacomo, a Data Science student.
        </h1>
        <p className={styles.description}>
          I'm enthusiastic about using design to make a positive impact and love
          blending my passion for artificial intelligence and web development to
          create innovative and user-centric experiences.
        </p>
        <div style={{ flex: 1 }}></div>
        <div className={`${styles.bottom} flex-row`}>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/giacomo-schiavo-a99a32185/"
              target="_blank"
              className={styles.linkedin}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/giacomoschiavo"
              target="_blank"
              className={styles.github}
            >
              <FaGithub />
            </a>
            <a
              href="mailto:giacomo.schiavo12@gmail.com"
              className={styles.mail}
            >
              <MdOutlineMail />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.introRight}>
        <img className={styles.profile} src={profilepic} alt="profile-pic" />
      </div>
    </section>
  );
};

export default Intro;
