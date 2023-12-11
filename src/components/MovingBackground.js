import styles from "./MovingBackground.module.css";

export const MovingBackground = ({
  src,
  alt = "bg-cloud",
  animated = true,
  position = "center",
}) => {
  return (
    <div className={styles.bg}>
      <img
        src={src}
        alt={alt}
        className={`${animated && styles.animated}`}
        style={{ objectPosition: position }}
      />
    </div>
  );
};
