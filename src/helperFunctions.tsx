import { ShipInterface } from "./context/ShipContext";

import { Ship } from "./context/ShipConstructor";

export const confirmShipPlacement = (copyOfOcean: any, arr: any) => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    copyOfOcean[arr[i].coords[0]][arr[i].coords[1]] = 1;
  }
  console.log(copyOfOcean);
  return copyOfOcean;
};

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
