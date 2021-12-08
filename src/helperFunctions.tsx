import { ShipInterface } from "./context/ShipContext";

import { Ship } from "./context/ShipConstructor";

export const confirmShipPlacement = (copyOfOcean: any, arr: any) => {
  for (let i = 0; i < arr.length; i++) {
    copyOfOcean[arr[i].coords[0]][arr[i].coords[1]] = 1;
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

    // This checks if any of the squares on the ship are out of bounds
    if (shipCoordX === coordinates[0] && shipCoordY === coordinates[1]) {
      inner = shipTile;
    }

    if (shipCoordX < 0 || shipCoordX > 7) {
      return { inner: null, handleClick: null };
    }
    if (shipCoordY < 0 || shipCoordY > 7) {
      return { inner: null, handleClick: null };
    }

    // This checks if any of the squares on the ship are colliding with another placed ship
    if (ocean[shipCoordX][shipCoordY] !== 0) {
      return { inner: null, handleClick: null };
    }
  }

  return { inner, handleClick };
};

// export const checkForShipCollision = (
//   arr: any,
//   ocean: any,
//   handleClick: any
// ) => {
//   for (let i = 0; i < arr.length; i++) {
//     const shipX = arr[i].coords[0];
//     const shipY = arr[i].coords[1];

//     if (ocean[shipX][shipY] !== 0) {
//       return null;
//     }
//   }
//   return handleClick;
// };

export const getHoverStateFromSquare: any = (
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
