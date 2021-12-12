import { useShip } from "../../context/ShipContext";
import ShipTile from "../Square/ShipTile";
import EndPiece from "../Square/EndPiece";
import { useSquareSize } from "../../context/SquareSize";
import "../../App.css";

interface HoverRefProps {
  hoverRef: any;
  placementIsDisabled: boolean;
}

const HoveredShip: React.FC<HoverRefProps> = ({
  hoverRef,
  placementIsDisabled,
}) => {
  const { squareSize }: any = useSquareSize();
  let { currentShip } = useShip();
  currentShip = currentShip();

  const orientation = currentShip.orientation;

  let pieces = [];

  let hoveredShipColor = "var(--hoveredShipColor)";
  if (placementIsDisabled) {
    hoveredShipColor = "var(--disabledShipColor)";
  }

  for (let i = 0; i < currentShip.length; i++) {
    if (i === 0) {
      if (orientation === "Horizontal") {
        pieces.push(
          <EndPiece
            key={i}
            coordinates={[3, 3]}
            squareValue={2}
            shipColor={hoveredShipColor}
          />
        );
      } else {
        pieces.push(
          <EndPiece
            key={i}
            coordinates={[3, 3]}
            squareValue={4}
            shipColor={hoveredShipColor}
          />
        );
      }
    } else if (i === currentShip.length - 1) {
      if (orientation === "Horizontal") {
        pieces.push(
          <EndPiece
            key={i}
            coordinates={[3, 3]}
            squareValue={3}
            shipColor={hoveredShipColor}
          />
        );
      } else {
        pieces.push(
          <EndPiece
            key={i}
            coordinates={[3, 3]}
            squareValue={5}
            shipColor={hoveredShipColor}
          />
        );
      }
    } else {
      pieces.push(
        <ShipTile key={i} coordinates={null} shipColor={hoveredShipColor} />
      );
    }
  }

  let resultArr = pieces.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          width: squareSize + "px",
          height: squareSize + "px",
          overflow: "hidden",
        }}
      >
        {item}
      </div>
    );
  });

  return (
    <div
      ref={hoverRef}
      style={{
        position: "absolute",
        display: "flex",
        width: orientation === "Vertical" ? squareSize + "px" : "auto",
        height: orientation === "Vertical" ? "auto" : squareSize + "px",
        flexDirection: orientation === "Vertical" ? "column" : "row",
        overflow: "hidden",
        transform:
          orientation === "Horizontal"
            ? `translate(${-(squareSize + 15)}px, -50%)`
            : `translate(-50%, ${-(squareSize + 10)}px)`,
        visibility: "hidden",
        cursor: "none",
      }}
    >
      {resultArr}
    </div>
  );
};

export default HoveredShip;
