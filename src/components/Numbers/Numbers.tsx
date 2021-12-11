import { useSquareSize } from "../../context/SquareSize";

const Numbers: React.FC = () => {
  const { squareSize }: any = useSquareSize();

  let numbers = [];
  for (let j = 0; j < 8; j++) {
    numbers.push(
      <div
        key={j}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          opacity: "0.5",
        }}
      >
        {j + 1}
      </div>
    );
  }

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
