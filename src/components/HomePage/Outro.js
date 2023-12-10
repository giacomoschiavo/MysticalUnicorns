import { CustomButton } from "../CustomButton";
import styles from "./Outro.module.css";
import bgoutro from "../../assets/bgoutro.png";
import { MovingBackground } from "../MovingBackground";

const Outro = () => {
  return (
    <section className={`${styles.outro} flex-column`} id="contact">
      <MovingBackground src={bgoutro} alt="bg-outro" />
      <h1>Want to work together?</h1>
      <p>Feel free to reach out for collaborations or just a friendly hello</p>
      <CustomButton>Contact me</CustomButton>
    </section>
  );
};

export default Outro;
