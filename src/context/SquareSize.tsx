import React, { useContext, useState } from "react";

const initial = 25;
const SquareContext = React.createContext(initial);

const SquareSizeProvider = ({ children }: any) => {
  const [squareSize, setSquareSize] = useState(initial);

  const ctx: any = {
    squareSize,
    setSquareSize,
  };

  return (
    <SquareContext.Provider value={ctx}>{children}</SquareContext.Provider>
  );
};

export default SquareSizeProvider;

export const useSquareSize = () => useContext(SquareContext);
