import { useShip } from "../../context/ShipContext";

const Instructions: React.FC = () => {
  const { currentShip, updateCurrentShip, setCurrentShip } = useShip();

  const { name, length, orientation } = currentShip;

  return (
    <div
      style={{
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>
        Place your&nbsp;
        <span style={{ textDecoration: "underline" }}>{name}</span>
      </h1>
      <ul style={{ listStyleType: "none", width: "400px" }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span>Length:</span>
          <span>{length}&nbsp;tiles</span>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Orientation:</span>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ textDecoration: "underline", marginRight: "10px" }}>
              {orientation}
            </span>
            <button onClick={() => updateCurrentShip("changeOrientation")}>
              Cha
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
