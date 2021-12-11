import { useSquareSize } from "../../context/SquareSize";

const Letters: React.FC = () => {
  const { squareSize }: any = useSquareSize();

  let letters = [];

  for (let i = 0; i < 9; i++) {
    let inner: string | null = String.fromCharCode(i - 1 + 65);
    if (i === 0) {
      inner = null;
    }
    letters.push(
      <div
        key={i}
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
        {inner}
      </div>
    );
  }

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
