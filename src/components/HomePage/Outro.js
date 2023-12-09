import styles from "./Outro.module.css";

const Outro = () => {
  return (
    <section className={`${styles.outro} flex-column`}>
      <h1>Want to work together?</h1>
      <p>Feel free to reach out for collaborations or just a friendly hello</p>
      <button>Contact me</button>
    </section>
  );
};

export default Outro;
