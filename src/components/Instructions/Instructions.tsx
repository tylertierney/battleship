import { useShip } from "../../context/ShipContext";

const Instructions: React.FC = () => {
  const { currentShip, updateCurrentShip, setCurrentShip } = useShip();

  const { name, length, orientation } = currentShip;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>
        Place your&nbsp;
        <span style={{ color: "blue" }}>{name}</span>
      </h2>
      <ul style={{ listStyleType: "none" }}>
        <li>
          Length:&nbsp;
          <span style={{ color: "blue" }}>{length}&nbsp;tiles</span>
        </li>
        <li>
          Orientation:&nbsp;
          <span style={{ color: "blue" }}>{orientation}</span>
          <button onClick={() => updateCurrentShip("changeOrientation")}>
            Change Orientation
          </button>
        </li>
      </ul>
      <button onClick={() => setCurrentShip(currentShip)}>Change Ship</button>
    </div>
  );
};

export default Instructions;
