import ShipPlacementInstructions from "./ShipPlacementInstructions";
import GameInstructions from "./GameInstructions";

interface InstructionProps {
  isEnteringShips: boolean;
}

const Instructions: React.FC<InstructionProps> = ({ isEnteringShips }) => {
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
      {isEnteringShips ? <ShipPlacementInstructions /> : <GameInstructions />}
    </div>
  );
};

export default Instructions;
