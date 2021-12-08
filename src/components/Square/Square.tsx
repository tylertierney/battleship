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
  // shipToPlace?: ShipInterface;
  // setShipToPlace?: Function;
  isHovering: any[];
  setIsHovering: Function;
  borderRight: string;
}

const Square: React.FC<SquareProps> = ({
  squareValue,
  coordinates,
  isHovering,
  setIsHovering,
  borderRight,
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
    enterShips(arr);
    squareValue = 1;
    setCurrentShip(currentShip);
  };

  // if (squareValue === 1) {
  //   inner = shipTile;
  // }

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

  if (squareValue === 1) {
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

export default Square;
