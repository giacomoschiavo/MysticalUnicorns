import profilepic from "../../sas.jpg";

const Intro = () => {
  return (
    <div className="intro flex-row">
      <div className="intro-left flex-column">
        <h1>
          Hello, I’m GiAbo, a product Designer With 7 years of experience.
        </h1>
        <p>
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div>
          <button>Contact me</button>
          <div>
            <a>Linkedin Icon</a>
            <a>GitHub Icon</a>
          </div>
        </div>
      </div>
      <a href="#about" className="intro-right">
        <div className="intro-right-image">
          <img src={profilepic} alt="profile-pic" />
        </div>
      </a>
    </div>
  );
};

export default Intro;
