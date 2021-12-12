import React, { useContext, useReducer } from "react";

const availableComputerShots: any = [
  ["00", "01", "02", "03", "04", "05", "06", "07"],
  ["10", "11", "12", "13", "14", "15", "16", "17"],
  ["20", "21", "22", "23", "24", "25", "26", "27"],
  ["30", "31", "32", "33", "34", "35", "36", "37"],
  ["40", "41", "42", "43", "44", "45", "46", "47"],
  ["50", "51", "52", "53", "54", "55", "56", "57"],
  ["60", "61", "62", "63", "64", "65", "66", "67"],
  ["70", "71", "72", "73", "74", "75", "76", "77"],
];

const initial = {
  phase: "enteringShips",
  score: { human: 0, computer: 0 },
  takenShots: { human: [], computer: [] },
  winner: null,
};

const GameContext = React.createContext(initial);

const GameContextProvider = ({ children }: any) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "changeGamePhase":
        return action.payload;
      case "updateScore":
        return action.payload;
      case "takeAShot":
        return action.payload;
    }
  };

  const [gameInfo, dispatch] = useReducer(reducer, initial);

  const changeGamePhase = (phase: string, winner: any) => {
    let copyOfGameInfo = { ...gameInfo };

    copyOfGameInfo.phase = phase;

    if (winner) {
      copyOfGameInfo.winner = winner;
    }

    dispatch({ type: "changeGamePhase", payload: copyOfGameInfo });
  };

  const updateScore = (player: string) => {
    let copyOfGameInfo = { ...gameInfo };

    if (player === "human") {
      copyOfGameInfo.score.human += 1;
    } else {
      copyOfGameInfo.score.computer += 1;
    }

    dispatch({ type: "updateScore", payload: copyOfGameInfo });
  };

  const takeAShot = (player: string, coordinates: any, ocean: any) => {
    let copyOfGameInfo = { ...gameInfo };

    if (player === "human") {
      copyOfGameInfo.takenShots.human.push([coordinates[0], coordinates[1]]);
    } else {
      let randomX = Math.floor(Math.random() * availableComputerShots.length);
      let randomY = Math.floor(
        Math.random() * availableComputerShots[randomX].length
      );

      let shot = availableComputerShots[randomX][randomY];
      copyOfGameInfo.takenShots.computer.push([
        Number(shot[0]),
        Number(shot[1]),
      ]);

      if (availableComputerShots[randomX].length === 1) {
        availableComputerShots.splice(randomX, 1);
      } else {
        availableComputerShots[randomX].splice(randomY, 1);
      }

      if (ocean[shot[0]][shot[1]] != 0) {
        // copyOfGameInfo.score.computer += 1;
        updateScore("computer");
      }
    }

    dispatch({ type: "takeAShot", payload: copyOfGameInfo });
  };

  const ctx: any = {
    gameInfo,
    changeGamePhase,
    updateScore,
    takeAShot,
  };

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>;
};

export default GameContextProvider;

export const useGameContext = () => useContext(GameContext);
