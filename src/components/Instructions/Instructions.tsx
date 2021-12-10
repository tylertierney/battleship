import "../../App.css";

import { useShip } from "../../context/ShipContext";

import { BiRefresh } from "react-icons/bi";

import { useSquareSize } from "../../context/SquareSize";

// import { getCurrentShip } from "../../helperFunctions";

const Instructions: React.FC = () => {
  const { squareSize }: any = useSquareSize();
  let { ships, currentShip, updateCurrentShip } = useShip();

  currentShip = currentShip();

  const { name, length, orientation } = currentShip;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        maxWidth: "90vw",
      }}
    >
      <h1 style={{ margin: "8px" }} className="instructionsHeader">
        Place your&nbsp;
        <span
          style={{
            borderBottom: "2px solid white",
          }}
        >
          {name}
        </span>
      </h1>
      <ul
        style={{
          listStyleType: "none",
          minWidth: "300px",
          maxWidth: "450px",
          padding: "0",
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span>Length:</span>
          <span className="instructionControls">{length}&nbsp;tiles</span>
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
            <span
              style={{
                textDecoration: "underline",
                marginRight: "10px",
              }}
              className="instructionControls"
            >
              {orientation}
            </span>
            <button
              onClick={() => updateCurrentShip("changeOrientation")}
              className="orientationToggle"
            >
              <BiRefresh color="white" size="2rem" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
