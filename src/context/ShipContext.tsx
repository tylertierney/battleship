import React, { useContext, useReducer } from "react";

import { Ship } from "./ShipConstructor";

export interface ShipInterface {
  /**
   * Name must be a string.
   */
  name: string;
  /**
   * Length must be an int;
   */
  length: number;
  /**
   * Orientation must be a string.
   */
  orientation: string;
  /**
   * MainX is the X value of the user-selected tile upon which to place the ship.
   */
  mainX: number | null;
  /**
   * MainY is the Y value of the user-selected tile upon which to place the ship.
   */
  mainY: number | null;
  /**
   * Coordinate Array is an array of arrays, each signifying coordinates
   * where the ship is placed
   */
  coordinateArray: any[][];
}

// const ships: any = [
//   {
//     name: "Battleship",
//     length: 4,
//     orientation: "Horizontal",
//     mainX: null,
//     mainY: null,
//     coordinateArray: Array(4)
//       .fill(0)
//       .map(() => {
//         return {
//           coords: Array(2).fill(null),
//           isHit: false,
//         };
//       }),
//   },
//   {
//     name: "Carrier",
//     length: 5,
//     orientation: "Horizontal",
//     mainX: null,
//     mainY: null,
//     coordinateArray: Array(5)
//       .fill(0)
//       .map(() => {
//         return {
//           coords: Array(2).fill(null),
//           isHit: false,
//         };
//       }),
//   },
//   {
//     name: "Cruiser",
//     length: 3,
//     orientation: "Horizontal",
//     mainX: null,
//     mainY: null,
//     coordinateArray: Array(3)
//       .fill(0)
//       .map(() => {
//         return {
//           coords: Array(2).fill(null),
//           isHit: false,
//         };
//       }),
//   },
//   {
//     name: "Submarine",
//     length: 3,
//     orientation: "Horizontal",
//     mainX: null,
//     mainY: null,
//     coordinateArray: Array(3)
//       .fill(0)
//       .map(() => {
//         return {
//           coords: Array(2).fill(null),
//           isHit: false,
//         };
//       }),
//   },
//   {
//     name: "Destroyer",
//     length: 2,
//     orientation: "Horizontal",
//     mainX: null,
//     mainY: null,
//     coordinateArray: Array(2)
//       .fill(0)
//       .map(() => {
//         return {
//           coords: Array(2).fill(null),
//           isHit: false,
//         };
//       }),
//   },
// ];

const ships: any = [
  new Ship("Battleship", 4, "Horizontal", null, null),
  new Ship("Carrier", 5, "Horizontal", null, null),
  new Ship("Cruiser", 3, "Horizontal", null, null),
  new Ship("Submarine", 3, "Horizontal", null, null),
  new Ship("Destroyer", 2, "Horizontal", null, null),
];

const ShipContext = React.createContext(ships[0]);

const ShipProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setCurrentShip":
        return action.payload;
      case "updateCurrentShip":
        return action.payload;
    }
  };

  const [currentShip, dispatch] = useReducer(reducer, ships[0]);

  const setCurrentShip = (ship: ShipInterface) => {
    for (let i = 0; i < ships.length; i++) {
      if (ship.name === ships[i].name) {
        if (i === ships.length - 1) {
          dispatch({ type: "setCurrentShip", payload: ships[0] });
          return;
        }
        dispatch({ type: "setCurrentShip", payload: ships[i + 1] });
      }
    }
  };

  const updateCurrentShip = (method: string) => {
    let updatedShip = { ...currentShip };

    switch (method) {
      case "changeOrientation":
        if (currentShip.orientation === "Vertical") {
          updatedShip.orientation = "Horizontal";
        } else {
          updatedShip.orientation = "Vertical";
        }
        console.log(updatedShip);
        dispatch({ type: "updateCurrentShip", payload: updatedShip });
        break;
      default:
      //do something
    }
  };

  const ctx = {
    currentShip,
    updateCurrentShip,
    setCurrentShip,
  };

  return <ShipContext.Provider value={ctx}>{children}</ShipContext.Provider>;
};

export default ShipProvider;

export const useShip = () => useContext(ShipContext);
