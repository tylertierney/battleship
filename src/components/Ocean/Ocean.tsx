import { useBattleship } from "../../context/GameContext";
import { useShip } from "../../context/ShipContext";

import Square from "../Square/Square";

import { useState } from "react";

const Ocean: React.FC = () => {
  const { ocean } = useBattleship();

  const [isHovering, setIsHovering] = useState([null, null]);

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
          const coordinates = [index1, index2];

          return (
            <Square
              key={index2}
              coordinates={coordinates}
              squareValue={item}
              isHovering={isHovering}
              setIsHovering={setIsHovering}
            />
          );
        })}
      </div>
    );
  });
};

export default Ocean;
