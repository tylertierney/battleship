import { ReactElement, ReactHTMLElement, useState } from "react";

import "../../App.css";

interface UnknownTileProps {
  coordinates: any[];
  squareValue: number;
}

const UnknownTile: React.FC<UnknownTileProps> = ({
  coordinates,
  squareValue,
}) => {
  const [inner, setInner] = useState<string | ReactElement>("");

  const missedShot = (
    <div
      style={{
        height: "75%",
        width: "75%",
        borderRadius: "50%",
        opacity: "0.5",
        border: "solid white 2.5px",
      }}
    ></div>
  );

  const hitShot = (
    <div
      style={{
        height: "75%",
        width: "75%",
        borderRadius: "50%",
        opacity: "0.9",
        border: "solid red 3px",
        backgroundColor: "var(--disabledShipColor)",
      }}
    ></div>
  );

  const handleClick = () => {
    if (squareValue === 0) {
      setInner(missedShot);
    }
    if (squareValue > 0) {
      setInner(hitShot);
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "none",
      }}
    >
      {inner}
    </div>
  );
};

export default UnknownTile;
