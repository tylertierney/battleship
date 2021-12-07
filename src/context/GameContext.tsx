import React, { useContext, useReducer } from "react";

import { activateShipTiles } from "../helperFunctions";

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
}

const initialOcean: any = Array(8)
  .fill(0)
  .map(() => Array(8).fill(0));

const OceanContext = React.createContext(initialOcean);

const OceanProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "enterCoordinates":
        return action.payload;
      case "enterShips":
        return action.payload;
    }
  };

  const [ocean, dispatch] = useReducer(reducer, initialOcean);

  const enterCoordinates = (coordinates: number[]) => {
    const copyOfOcean = [...ocean];
    // const xCoord = coordinates[0];
    // const yCoord = coordinates[1];

    dispatch({ type: "enterCoordinates", payload: copyOfOcean });
  };

  const enterShips = (shipToPlace: ShipInterface, coordinates: number[]) => {
    let copyOfOcean = [...ocean];

    copyOfOcean = activateShipTiles(shipToPlace, copyOfOcean, coordinates);

    dispatch({ type: "enterShips", payload: copyOfOcean });
  };

  const ctx = {
    ocean,
    enterCoordinates,
    enterShips,
  };

  return <OceanContext.Provider value={ctx}>{children}</OceanContext.Provider>;
};

export default OceanProvider;

export const useBattleship = () => useContext(OceanContext);
