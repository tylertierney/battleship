import { useBattleship } from "../../context/GameContext";

interface SquareProps {
  squareValue: number;
  coordinates: number[];
}

const Square: React.FC<SquareProps> = ({ squareValue, coordinates }) => {
  const { enterCoordinates } = useBattleship();

  return (
    <div
      onClick={() => enterCoordinates([...coordinates])}
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "1px solid red",
      }}
    >
      {squareValue}
    </div>
  );
};

export default Square;
