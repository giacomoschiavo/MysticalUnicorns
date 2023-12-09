import profilepic from "../../sas.jpg";
import styles from "./Intro.module.css";
import bgintro from "../../assets/bgintro.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <section className={`${styles.intro} flex-row`}>
      <div className={`${styles.introLeft} flex-column`}>
        <div className="bg">
          <img src={bgintro} alt="bg-intro" />
        </div>
        <h1 className={styles.introTit}>
          Hello, I’m GiAbo, a product Designer With 7 years of experience.
        </h1>
        <p>
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div style={{ flex: 1 }}></div>
        <div className={`${styles.bottom} flex-row`}>
          <button>Contact me</button>
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
        <img src={profilepic} alt="profile-pic" />
      </div>
    </section>
  );
};

export default Intro;
