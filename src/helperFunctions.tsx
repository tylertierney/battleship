import { ShipInterface } from "./context/ShipContext";

import { Ship } from "./context/ShipConstructor";

export const confirmShipPlacement = (
  copyOfOcean: any,
  arr: any,
  orientation: any
) => {
  for (let i = 0; i < arr.length; i++) {
    let xVal = arr[i].coords[0];
    let yVal = arr[i].coords[1];

    // If the tile is an end piece, determine whether it's up, right, left, or down
    if (i === 0) {
      if (orientation === "Horizontal") {
        copyOfOcean[xVal][yVal] = 2;
      } else {
        copyOfOcean[xVal][yVal] = 4;
      }
    } else if (i === arr.length - 1) {
      if (orientation === "Horizontal") {
        copyOfOcean[xVal][yVal] = 3;
      } else {
        copyOfOcean[xVal][yVal] = 5;
      }
    } else {
      copyOfOcean[xVal][yVal] = 1;
    }
  }
  return copyOfOcean;
};

export const checkIfShipOutOfBounds = (
  arr: any,
  shipTile: any,
  inner: any,
  handleClick: any,
  coordinates: any,
  ocean: any
) => {
  for (let i = 0; i < arr.length; i++) {
    const shipCoordX = arr[i].coords[0];
    const shipCoordY = arr[i].coords[1];

    // This checks if a square is "beneath" the ship while it is hovering
    if (shipCoordX === coordinates[0] && shipCoordY === coordinates[1]) {
      inner = shipTile;
    }

    // This checks if any of the squares on the ship are out of bounds
    if (shipCoordX < 0 || shipCoordX > 7) {
      return { inner: null, handleClick: null };
    }
    if (shipCoordY < 0 || shipCoordY > 7) {
      return { inner: null, handleClick: null };
    }

    if (ocean[shipCoordX][shipCoordY] != 0) {
      inner = null;
      handleClick = null;
    }
  }

  return { inner, handleClick };
};

export const getCoordArrayFromShip: any = (
  length: number,
  orientation: string,
  targetX: number | null,
  targetY: number | null
) => {
  if (targetX === null || targetY === null) {
    return null;
  }

  let arr = Array(length).fill(0);
  if (orientation === "Vertical") {
    for (let i = -1; i < arr.length - 1; i++) {
      arr[i + 1] = {
        coords: [targetX + i, targetY],
        isHit: false,
      };
    }
  } else {
    for (let i = -1; i < arr.length - 1; i++) {
      arr[i + 1] = {
        coords: [targetX, targetY + i],
        isHit: false,
      };
    }
  }
  return arr;
};

// export const determineBorderBottom = (index1: number) => {
//   if (index1 === 7) {
//     return "noBorderBottom";
//   }
//   return "borderBottom";
// };

// export const determineBorderRight = (index2: number) => {
//   if (index2 === 7) {
//     return "noBorderRight";
//   }
//   return "borderRight";
// };
