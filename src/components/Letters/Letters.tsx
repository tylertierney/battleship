import { useSquareSize } from "../../context/SquareSize";

interface LettersProps {
  letters: any[];
}

const Letters: React.FC<LettersProps> = ({ letters }) => {
  const { squareSize }: any = useSquareSize();

  return (
    <div
      style={{
        height: squareSize + "px",
        width: 9 * squareSize + "px",
        display: "flex",
      }}
    >
      {letters}
    </div>
  );
};

export default Letters;
