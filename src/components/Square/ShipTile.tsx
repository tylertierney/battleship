import "../../App.css";

import { useSquareSize } from "../../context/SquareSize";

interface ShipTileProps {
  shipColor: string;
}
const ShipTile: React.FC<ShipTileProps> = ({ shipColor }) => {
  const { squareSize }: any = useSquareSize();

  return (
    <div
      style={{
        width: squareSize + "px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: shipColor,
        overflow: "hidden",
        cursor: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: shipColor,
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
};

export default ShipTile;
