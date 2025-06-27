export const Button = ({ title, onClick2 }: any) => {
  return (
    <button
      onClick={onClick2}
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "15px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
};
