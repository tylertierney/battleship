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

  let letters = [];
  let numbers = [];

  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      letters.push(
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            opacity: "0.5",
          }}
        ></div>
      );
    } else {
      letters.push(
        <div
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
          {String.fromCharCode(i - 1 + 65)}
        </div>
      );
    }
  }

  for (let j = 0; j < 8; j++) {
    numbers.push(
      <div
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
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div style={{ height: "50px", width: "450px", display: "flex" }}>
        {letters}
      </div>
      <div style={{ display: "flex", alignItems: "center", height: "400px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50px",
            height: "100%",
          }}
        >
          {numbers}
        </div>
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
      </div>
    </div>
  );
};

export default Ocean;
