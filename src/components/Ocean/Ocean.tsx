import { useBattleship } from "../../context/GameContext";
import { useShip } from "../../context/ShipContext";

import "../../App.css";

import EmptyTile from "../Square/EmptyTile";

import { useState } from "react";

import GridOverlay from "../GridOverlay/GridOverlay";

// import {
//   determineBorderBottom,
//   determineBorderRight,
// } from "../../helperFunctions";
import ShipTile from "../Square/ShipTile";
import EndPiece from "../Square/EndPiece";

const Ocean: React.FC = () => {
  const { ocean } = useBattleship();

  const { ships } = useShip();

  const [isHovering, setIsHovering] = useState([null, null]);

  return (
    <div style={{ height: "400px", width: "400px", position: "relative" }}>
      <GridOverlay />
      {ocean.map((item: any, index1: any) => {
        return (
          <div
            key={index1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              position: "relative",
              height: "50px",
            }}
          >
            {item.map((item: any, index2: any) => {
              const coordinates = [index1, index2];

              switch (item) {
                case 0:
                  return (
                    <EmptyTile
                      key={index2}
                      coordinates={coordinates}
                      squareValue={item}
                      isHovering={isHovering}
                      setIsHovering={setIsHovering}
                    />
                  );
                case 1:
                  return <ShipTile key={index2} />;
                default:
                  return (
                    <EndPiece
                      key={index2}
                      coordinates={coordinates}
                      squareValue={item}
                    />
                  );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Ocean;
