import { ShipInterface } from "../../context/GameContext";

interface InstructionProps {
  shipToPlace: ShipInterface;
  setShipToPlace: Function;
}

const Instructions: React.FC<InstructionProps> = ({
  shipToPlace,
  setShipToPlace,
}) => {
  const changeOrientation = (shipToPlace: ShipInterface) => {
    const newOrientation = { ...shipToPlace };
    if (newOrientation.orientation === "Horizontal") {
      newOrientation.orientation = "Vertical";
    } else {
      newOrientation.orientation = "Horizontal";
    }

    setShipToPlace(newOrientation);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>
        Place your&nbsp;
        <span style={{ color: "blue" }}>{shipToPlace.name}</span>
      </h2>
      <ul style={{ listStyleType: "none" }}>
        <li>
          Length:&nbsp;
          <span style={{ color: "blue" }}>{shipToPlace.length}&nbsp;tiles</span>
        </li>
        <li>
          Orientation:&nbsp;
          <span style={{ color: "blue" }}>{shipToPlace.orientation}</span>
          <button onClick={() => changeOrientation(shipToPlace)}>
            Change Orientation
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
