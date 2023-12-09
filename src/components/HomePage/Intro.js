import profilepic from "../../assets/sas.jpg";
import styles from "./Intro.module.css";
import bgintro from "../../assets/bgintro.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CustomButton } from "../CustomButton";

const Intro = () => {
  return (
    <section className={`${styles.intro} flex-row`}>
      <div className={`${styles.introLeft} flex-column`}>
        <div className={styles.bg}>
          <img src={bgintro} alt="bg-intro" />
        </div>
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
          <CustomButton>Contact me</CustomButton>
          <div style={{ flex: 1 }}></div>
          <div className={styles.socials}>
            <a href="#" className={styles.github}>
              <FaGithub />
            </a>
            <a href="#" className={styles.linkedin}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.introRight}`}>
        <img className={styles.profile} src={profilepic} alt="profile-pic" />
      </div>
    </section>
  );
};

export default Intro;
