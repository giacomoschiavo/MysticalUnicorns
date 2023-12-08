import profilepic from "../../sas.jpg";
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <section className={`${styles.intro} flex-row`}>
      <div className={`${styles.introLeft} flex-column`}>
        <h1 className={styles.introTit}>
          Hello, I’m GiAbo, a product Designer With 7 years of experience.
        </h1>
        <p>
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div className="flex-row">
          <button>Contact me</button>
          <div>
            <a>Linkedin Icon</a>
            <a>GitHub Icon</a>
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
