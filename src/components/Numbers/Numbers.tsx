import { useSquareSize } from "../../context/SquareSize";

interface NumbersProps {
  numbers: any[];
}

const Numbers: React.FC<NumbersProps> = ({ numbers }) => {
  const { squareSize }: any = useSquareSize();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: squareSize + "px",
        height: "100%",
      }}
    >
      {numbers}
    </div>
  );
};

export default Numbers;
