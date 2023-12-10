import styles from "./MovingBackground.module.css";

export const MovingBackground = ({ src, alt = "bg-cloud" }) => {
  return (
    <div className={styles.bg}>
      <img src={src} alt={alt} />
    </div>
  );
};
