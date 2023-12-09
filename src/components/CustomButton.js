export const CustomButton = ({ children }) => {
  return (
    <button
      style={{
        border: "none",
        "font-size": "1rem",
        "font-family": "Nunito, sans-serif",
        "font-weight": "bold",
        "border-radius": "20px",
        padding: "10px 15px",
        cursor: "pointer",
        "background-color": "rgba(0, 0, 0, 0.5)",
        color: "white",
        "box-sizing": "border-box",
      }}
    >
      {children}
    </button>
  );
};
