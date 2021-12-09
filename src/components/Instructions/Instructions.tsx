import { useShip } from "../../context/ShipContext";

import { BiRefresh } from "react-icons/bi";

// import { getCurrentShip } from "../../helperFunctions";

const Instructions: React.FC = () => {
  let { ships, currentShip, updateCurrentShip } = useShip();

  currentShip = currentShip();

  const { name, length, orientation } = currentShip;

  return (
    <div
      style={{
        marginBottom: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1 style={{ margin: "8px" }}>
        Place your&nbsp;
        <span
          style={{
            borderBottom: "2px solid white",
          }}
        >
          {name}
        </span>
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
          <span style={{ fontSize: "1.3rem" }}>{length}&nbsp;tiles</span>
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
                fontSize: "1.3rem",
              }}
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
