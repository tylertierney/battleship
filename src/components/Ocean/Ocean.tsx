import { useBattleship, ShipInterface } from "../../context/GameContext";

import Square from "../Square/Square";

interface OceanProps {
  shipToPlace: ShipInterface;
  setShipToPlace: Function;
}

const Ocean: React.FC<OceanProps> = ({ shipToPlace, setShipToPlace }) => {
  const { ocean } = useBattleship();

  return ocean.map((item: any, index1: any) => {
    return (
      <div
        key={index1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        {item.map((item: any, index2: any) => {
          return (
            <Square
              key={index2}
              coordinates={[index1, index2]}
              squareValue={item}
              shipToPlace={shipToPlace}
              setShipToPlace={setShipToPlace}
            />
          );
        })}
      </div>
    );
  });
};

export default Ocean;
