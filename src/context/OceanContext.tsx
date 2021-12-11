import React, { useContext, useReducer } from "react";

import {
  confirmShipPlacement,
  generateComputerOcean,
} from "../helperFunctions";

import { ShipInterface } from "./ShipContext";

const initialOcean: any = Array(8)
  .fill(0)
  .map(() => Array(8).fill(0));

const computerOcean: any = generateComputerOcean();

const OceanContext = React.createContext(initialOcean);

const OceanProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "enterShips":
        return action.payload;
    }
  };

  const [ocean, dispatch] = useReducer(reducer, initialOcean);

  const enterShips = (arr: any, orientation: any) => {
    let copyOfOcean = [...ocean];

    copyOfOcean = confirmShipPlacement(copyOfOcean, arr, orientation);

    dispatch({ type: "enterShips", payload: copyOfOcean });
  };

  const ctx = {
    ocean,
    enterShips,
    computerOcean,
  };

  return <OceanContext.Provider value={ctx}>{children}</OceanContext.Provider>;
};

export default OceanProvider;

export const useOceanContext = () => useContext(OceanContext);
