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
}

const EmptyTile: React.FC<SquareProps> = ({
  squareValue,
  coordinates,
  isHovering,
  setIsHovering,
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
        height: "95%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {inner}
    </div>
  );
};

export default EmptyTile;
