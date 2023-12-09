export const CustomButton = ({ children }) => {
  return (
    <button
      style={{
        border: "none",
        fontSize: "20px",
        fontFamily: "Nunito, sans-serif",
        fontWeight: "bold",
        borderRadius: "20px",
        padding: "10px 15px",
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      {children}
    </button>
  );
};
