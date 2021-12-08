import { useBattleship } from "../../context/GameContext";

import { ShipInterface, useShip } from "../../context/ShipContext";

import {
  checkIfShipOutOfBounds,
  getHoverStateFromSquare,
} from "../../helperFunctions";

interface SquareProps {
  squareValue: number;
  coordinates: number[];
  shipToPlace?: ShipInterface;
  setShipToPlace?: Function;
  isHovering: any[];
  setIsHovering: Function;
}

const Square: React.FC<SquareProps> = ({
  squareValue,
  coordinates,
  isHovering,
  setIsHovering,
}) => {
  const { currentShip, setCurrentShip } = useShip();

  const { ocean, enterShips } = useBattleship();

  const shipTile = (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        border: "2px solid blue",
        outline: "1px solid blue",
      }}
    ></div>
  );

  let inner: any = null;
  let arr = getHoverStateFromSquare(
    currentShip.length,
    currentShip.orientation,
    isHovering[0],
    isHovering[1]
  );

  let handleClick: any = () => {
    enterShips(arr);
    squareValue = 1;
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

  if (squareValue === 1) {
    inner = shipTile;
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovering([...coordinates])}
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "1px solid",
      }}
    >
      {inner}
      {/* {squareValue} */}
    </div>
  );
};

export default Square;
