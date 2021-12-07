import { useBattleship, ShipInterface } from "../../context/GameContext";

interface SquareProps {
  squareValue: number;
  coordinates: number[];
  shipToPlace?: ShipInterface;
  setShipToPlace?: Function;
}

const Square: React.FC<SquareProps> = ({
  squareValue,
  coordinates,
  shipToPlace,
  setShipToPlace,
}) => {
  const { enterShips } = useBattleship();

  const determineSquareInnerHTML = (squareValue: Number) => {
    switch (squareValue) {
      case 0:
        return 0;
      case 1:
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "blue",
              border: "2px solid blue",
            }}
          ></div>
        );
    }
  };

  return (
    <div
      onClick={() => enterShips(shipToPlace, [...coordinates])}
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
      {determineSquareInnerHTML(squareValue)}
    </div>
  );
};

export default Square;
