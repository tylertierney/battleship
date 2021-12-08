import { useBattleship } from "../../context/GameContext";
import { useShip } from "../../context/ShipContext";

import "../../App.css";

import Square from "../Square/Square";

import { useState } from "react";

const Ocean: React.FC = () => {
  const { ocean } = useBattleship();

  const [isHovering, setIsHovering] = useState([null, null]);

  const determineBorderBottom = (index1: number) => {
    if (index1 === 7) {
      return "noBorderBottom";
    }
    return "borderBottom";
  };

  const determineBorderRight = (index2: number) => {
    if (index2 === 7) {
      return "noBorderRight";
    }
    return "borderRight";
  };

  return (
    <div style={{ height: "400px", width: "400px" }}>
      {ocean.map((item: any, index1: any) => {
        console.log(index1);
        return (
          <div
            key={index1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className={determineBorderBottom(index1)}
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
                  borderRight={determineBorderRight(index2)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Ocean;
