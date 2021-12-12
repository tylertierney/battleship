import "../../App.css";

import { useSquareSize } from "../../context/SquareSize";

import { hitShot } from "../Square/UnknownTile";

import { checkIfSquareHasBeenShotAt } from "../../helperFunctions";

import { useGameContext } from "../../context/GameContext";

interface ShipTileProps {
  coordinates: any;
  shipColor: string;
}
const ShipTile: React.FC<ShipTileProps> = ({ coordinates, shipColor }) => {
  const { gameInfo }: any = useGameContext();

  const { squareSize }: any = useSquareSize();

  let inner = null;
  if (checkIfSquareHasBeenShotAt(coordinates, gameInfo.takenShots.computer)) {
    inner = hitShot;
  }

  return (
    <div
      style={{
        width: squareSize + "px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: shipColor,
        overflow: "hidden",
        cursor: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: shipColor,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {inner}
      </div>
    </div>
  );
};

export default ShipTile;
