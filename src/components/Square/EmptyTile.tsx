import { useGameContext } from "../../context/GameContext";

import { useShip } from "../../context/ShipContext";

import "../../App.css";

import { useSquareSize } from "../../context/SquareSize";

import { useEffect, useState } from "react";

import {
  checkIfShipOutOfBounds,
  getCoordArrayFromShip,
} from "../../helperFunctions";

interface SquareProps {
  squareValue: number;
  coordinates: number[];
  isHovering: any[];
  setIsHovering: Function;
  placementIsDisabled: boolean;
  setPlacementIsDisabled: Function;
}

const EmptyTile: React.FC<SquareProps> = ({
  squareValue,
  coordinates,
  isHovering,
  setIsHovering,
  placementIsDisabled,
  setPlacementIsDisabled,
}) => {
  const { squareSize }: any = useSquareSize();
  let { ships, currentShip, setCurrentShip, updateCurrentShip } = useShip();

  currentShip = currentShip();

  const { ocean, enterShips } = useGameContext();

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

  useEffect(() => {
    if (arr) {
      let result = checkIfShipOutOfBounds(
        arr,
        shipTile,
        inner,
        handleClick,
        coordinates,
        ocean
      );
      // inner = result.inner;
      handleClick = result.handleClick;

      if (result.handleClick === null) {
        setPlacementIsDisabled(() => true);
      } else {
        setPlacementIsDisabled(() => false);
      }
    }

    if (arr == null) {
      setPlacementIsDisabled(() => true);
    }
  }, [JSON.stringify(arr)]);

  if (arr) {
    let result2 = checkIfShipOutOfBounds(
      arr,
      shipTile,
      inner,
      handleClick,
      coordinates,
      ocean
    );
    inner = result2.inner;
  }

  return (
    <div
      onClick={placementIsDisabled ? null : handleClick}
      onMouseEnter={() => setIsHovering([...coordinates])}
      onMouseLeave={() => setIsHovering([null, null])}
      style={{
        width: squareSize + "px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // cursor: "pointer",
        overflow: "hidden",
        cursor: "none",
      }}
    >
      {inner}
    </div>
  );
};

export default EmptyTile;
