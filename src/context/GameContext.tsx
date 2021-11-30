import React, { useContext, useReducer } from "react";

const initialOcean: any = Array(8)
  .fill(0)
  .map(() => Array(8).fill(0));

const OceanContext = React.createContext(initialOcean);

const OceanProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "enterCoordinates":
        return action.payload;
    }
  };

  const [ocean, dispatch] = useReducer(reducer, initialOcean);

  const enterCoordinates = (coordinates: number[]) => {
    const copyOfOcean = [...ocean];
    const xCoord = coordinates[0];
    const yCoord = coordinates[1];

    copyOfOcean[xCoord][yCoord] = 1;

    dispatch({ type: "enterCoordinates", payload: copyOfOcean });
  };

  const ctx = {
    ocean,
    enterCoordinates,
  };

  return <OceanContext.Provider value={ctx}>{children}</OceanContext.Provider>;
};

export default OceanProvider;

export const useBattleship = () => useContext(OceanContext);
