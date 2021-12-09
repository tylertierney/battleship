import "../../App.css";

import { useSquareSize } from "../../context/SquareSize";

interface EndPieceProps {
  coordinates: number[];
  squareValue: number;
}
const EndPiece: React.FC<EndPieceProps> = ({ coordinates, squareValue }) => {
  const { squareSize }: any = useSquareSize();
  let direction;
  let borderRight = "none";
  let borderBottom = "none";

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
      borderRight = "2px solid white";
      break;
    case 5:
      direction = "pointDown";
      break;
    default:
      direction = "pointLeft";
  }

  if (coordinates[1] === 7) {
    borderRight = "none";
  }

  return (
    <div
      style={{
        height: "95%",
        width: squareSize + "px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={`endPiece ${direction}`}></div>
    </div>
  );
};

export default EndPiece;
