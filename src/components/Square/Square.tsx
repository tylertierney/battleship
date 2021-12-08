import { useBattleship } from "../../context/GameContext";

import { ShipInterface, useShip } from "../../context/ShipContext";

import { getHoverStateFromSquare } from "../../helperFunctions";

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

  const { enterShips } = useBattleship();

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
  let handleClick: any = () => {
    const arr = getHoverStateFromSquare(
      currentShip.length,
      currentShip.orientation,
      isHovering[0],
      isHovering[1]
    );
    enterShips(arr);
    squareValue = 1;
    setCurrentShip(currentShip);
  };

  let arr = getHoverStateFromSquare(
    currentShip.length,
    currentShip.orientation,
    isHovering[0],
    isHovering[1]
  );

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].coords[0] === coordinates[0] &&
        arr[i].coords[1] === coordinates[1]
      ) {
        inner = shipTile;
      }

      if (arr[i].coords[0] < 0 || arr[i].coords[0] > 7) {
        handleClick = null;
      }
      if (arr[i].coords[1] < 0 || arr[i].coords[1] > 7) {
        handleClick = null;
      }
    }
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
    </div>
  );
};

export default Square;
