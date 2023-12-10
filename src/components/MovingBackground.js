import styles from "./MovingBackground.module.css";

export const MovingBackground = ({
  src,
  alt = "bg-cloud",
  animated = true,
}) => {
  return (
    <div className={styles.bg}>
      <img src={src} alt={alt} style={!animated ? { animation: "none" } : {}} />
    </div>
  );
};
