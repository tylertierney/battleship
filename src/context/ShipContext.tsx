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
   * Coordinate Array is an array of arrays, each signifying coordinates
   * where the ship is placed
   */
  coordinateArray: any[][];
  isCurrent: boolean;
}

const initialShips: any = [
  new Ship("Battleship", 4, "Horizontal", null, true),
  new Ship("Carrier", 5, "Horizontal", null, false),
  new Ship("Cruiser", 3, "Horizontal", null, false),
  new Ship("Submarine", 3, "Horizontal", null, false),
  new Ship("Destroyer", 2, "Horizontal", null, false),
];

const ShipContext = React.createContext(initialShips);

const ShipProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setCurrentShip":
        return action.payload;
      case "updateCurrentShip":
        return action.payload;
    }
  };

  const [ships, dispatch] = useReducer(reducer, initialShips);

  const setCurrentShip = (ship: ShipInterface) => {
    let copyOfShips = [...ships];

    for (let i = 0; i < copyOfShips.length; i++) {
      if (ship.name === copyOfShips[i].name) {
        if (i === copyOfShips.length - 1) {
          dispatch({ type: "setCurrentShip", payload: copyOfShips });
          return;
        }
        copyOfShips[i].isCurrent = false;
        copyOfShips[i + 1].isCurrent = true;

        dispatch({ type: "setCurrentShip", payload: copyOfShips });
        return;
      } else {
        copyOfShips[i].isCurrent = false;
      }
    }
  };

  const updateCurrentShip = (method: string, arr: any) => {
    let currentShip;
    let copyOfShips = [...ships];
    for (let i = 0; i < copyOfShips.length; i++) {
      if (copyOfShips[i].isCurrent) {
        currentShip = copyOfShips[i];

        switch (method) {
          case "changeOrientation":
            if (currentShip.orientation === "Vertical") {
              currentShip.orientation = "Horizontal";
            } else {
              currentShip.orientation = "Vertical";
            }

            dispatch({ type: "updateCurrentShip", payload: copyOfShips });
            break;
          case "updateCoords":
            currentShip.coordinateArray = arr;
            dispatch({ type: "updateCurrentShip", payload: copyOfShips });
            break;
          default:
          // do something
        }
      }
    }
  };

  const getCurrentShip = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isCurrent) {
        return ships[i];
      }
    }
  };

  const ctx = {
    currentShip: getCurrentShip,
    updateCurrentShip,
    setCurrentShip,
    ships,
  };

  return <ShipContext.Provider value={ctx}>{children}</ShipContext.Provider>;
};

export default ShipProvider;

export const useShip = () => useContext(ShipContext);
