import { useOceanContext } from "../../context/OceanContext";

import { useShip } from "../../context/ShipContext";

import "../../App.css";

import { useSquareSize } from "../../context/SquareSize";

import { useEffect, useState } from "react";

import {
  checkIfShipOutOfBounds,
  getCoordArrayFromShip,
  checkIfSquareHasBeenShotAt,
} from "../../helperFunctions";

import { missedShot } from "../Square/UnknownTile";

import { useGameContext } from "../../context/GameContext";

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
  const { gameInfo, changeGamePhase }: any = useGameContext();
  const { squareSize }: any = useSquareSize();
  let { ships, currentShip, setCurrentShip, updateCurrentShip } = useShip();

  currentShip = currentShip();

  const { ocean, enterShips } = useOceanContext();

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
    if (currentShip.name === "Destroyer") {
      changeGamePhase("playing");
    }
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

  if (checkIfSquareHasBeenShotAt(coordinates, gameInfo.takenShots.computer)) {
    inner = missedShot;
  }

  return (
    <div
      onClick={placementIsDisabled ? null : handleClick}
      onMouseEnter={() => setIsHovering([...coordinates])}
      onMouseLeave={
        gameInfo.phase === "enteringShips"
          ? () => setIsHovering([null, null])
          : undefined
      }
      style={{
        width: squareSize + "px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        cursor: "none",
      }}
    >
      {inner}
    </div>
  );
};

export default EmptyTile;
