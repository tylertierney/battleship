import "../../App.css";

import { useSquareSize } from "../../context/SquareSize";

interface ShipTileProps {
  //   borderRight: string;
  //   borderBottom: string;
}
const ShipTile: React.FC<ShipTileProps> = () => {
  const { squareSize }: any = useSquareSize();

  return (
    <div
      style={{
        width: squareSize + "px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "var(--shipColor)",
        border: "2px solid var(--shipColor)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "var(--shipColor)",
        }}
      ></div>
    </div>
  );
};

export default ShipTile;
