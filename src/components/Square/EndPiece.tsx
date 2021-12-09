import "../../App.css";

// import { useBattleship } from "../../context/GameContext";

interface EndPieceProps {
  coordinates: number[];
  squareValue: number;
}
const EndPiece: React.FC<EndPieceProps> = ({ coordinates, squareValue }) => {
  let direction;
  let borderRight = "none";

  switch (squareValue) {
    case 2:
      direction = "pointLeft";
      break;
    case 3:
      direction = "pointRight";
      borderRight = "2px solid white";
      break;
    case 4:
      direction = "pointUp";
      break;
    case 5:
      direction = "pointDown";
      break;
    default:
      direction = "pointLeft";
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        maxHeight: "90%",
        overflow: "hidden",
        borderRight,
      }}
    >
      <div className={`endPiece ${direction}`}></div>
    </div>
  );
};

export default EndPiece;
