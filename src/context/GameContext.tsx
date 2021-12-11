import React, { useContext, useReducer } from "react";

const initial = { phase: "enteringShips" };

const GameContext = React.createContext(initial);

const GameContextProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "changeGamePhase":
        return action.payload;
    }
  };

  const [gameInfo, dispatch] = useReducer(reducer, initial);

  const changeGamePhase = (phase: string) => {
    let copyOfGameInfo = { ...gameInfo };

    copyOfGameInfo.phase = phase;

    dispatch({ type: "changeGamePhase", payload: copyOfGameInfo });
  };

  const ctx: any = {
    gameInfo,
    changeGamePhase,
  };

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>;
};

export default GameContextProvider;

export const useGameContext = () => useContext(GameContext);
