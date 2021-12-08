import React, { useContext, useReducer } from "react";

import { confirmShipPlacement } from "../helperFunctions";

import { ShipInterface } from "./ShipContext";

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

    dispatch({ type: "enterCoordinates", payload: copyOfOcean });
  };

  const enterShips = (arr: any) => {
    let copyOfOcean = [...ocean];

    copyOfOcean = confirmShipPlacement(copyOfOcean, arr);

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
