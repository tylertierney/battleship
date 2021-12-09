import { useBattleship } from "../../context/GameContext";

import { ShipInterface, useShip } from "../../context/ShipContext";

import "../../App.css";

import {
  checkIfShipOutOfBounds,
  getCoordArrayFromShip,
} from "../../helperFunctions";

interface SquareProps {
  squareValue: number;
  coordinates: number[];
  isHovering: any[];
  setIsHovering: Function;
  borderRight: string;
}

const EmptyTile: React.FC<SquareProps> = ({
  squareValue,
  coordinates,
  isHovering,
  setIsHovering,
  borderRight,
}) => {
  let { ships, currentShip, setCurrentShip, updateCurrentShip } = useShip();

  currentShip = currentShip();

  const { ocean, enterShips } = useBattleship();

  const shipTile = (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--shipColor)",
        border: "2px solid var(--shipColor)",
        outline: "1px solid var(--shipColor)",
      }}
    ></div>
  );

  // const endPiece = <div className="endPiece pointLeft"></div>;

  const disabledShipTile = (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "gray",
        border: "2px solid gray",
        outline: "1px solid gray",
      }}
    ></div>
  );

  let inner: any = null;
  let arr = getCoordArrayFromShip(
    currentShip.length,
    currentShip.orientation,
    isHovering[0],
    isHovering[1]
  );

  let handleClick: any = () => {
    enterShips(arr, currentShip.orientation);
    updateCurrentShip("updateCoords", arr);
    setCurrentShip(currentShip);
  };

  if (arr) {
    let result = checkIfShipOutOfBounds(
      arr,
      shipTile,
      disabledShipTile,
      inner,
      handleClick,
      coordinates,
      ocean
    );
    inner = result.inner;
    handleClick = result.handleClick;
  }

  if (squareValue === 1 || squareValue === 2) {
    inner = shipTile;
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovering([...coordinates])}
      style={{
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      className={
        borderRight === "borderRight" ? "borderRight" : "noBorderRight"
      }
    >
      {inner}
    </div>
  );
};

export default EmptyTile;
