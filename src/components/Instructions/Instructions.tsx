import ShipPlacementInstructions from "./ShipPlacementInstructions";
import GameInstructions from "./GameInstructions";

import { useGameContext } from "../../context/GameContext";

const Instructions: React.FC = () => {
  const { gameInfo }: any = useGameContext();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        maxWidth: "90vw",
      }}
    >
      {gameInfo.phase === "enteringShips" ? (
        <ShipPlacementInstructions />
      ) : (
        <GameInstructions />
      )}
    </div>
  );
};

export default Instructions;
