import { useGameContext } from "../../context/GameContext";
import { useShip } from "../../context/ShipContext";

import { useSquareSize } from "../../context/SquareSize";

import "../../App.css";

import EmptyTile from "../Square/EmptyTile";

import { useState } from "react";

import GridOverlay from "../GridOverlay/GridOverlay";

import ShipTile from "../Square/ShipTile";
import EndPiece from "../Square/EndPiece";
import { useEffect } from "react";

import { generateLetters, generateNumbers } from "../../helperFunctions";

const Ocean: React.FC = () => {
  const { squareSize, setSquareSize }: any = useSquareSize();

  useEffect(() => {
    if (window.innerWidth < 400) {
      setSquareSize(38);
    }
  }, []);

  const { ocean } = useGameContext();

  const [isHovering, setIsHovering] = useState([null, null]);

  let letters = generateLetters();
  let numbers = generateNumbers();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: squareSize + "px",
            width: 9 * squareSize + "px",
            display: "flex",
          }}
        >
          {letters}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 8 * squareSize + "px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: squareSize + "px",
              height: "100%",
            }}
          >
            {numbers}
          </div>
          <div
            style={{
              height: 8 * squareSize + "px",
              width: 8 * squareSize + "px",
              position: "relative",
            }}
          >
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
                    height: squareSize + "px",
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
    </>
  );
};

export default Ocean;
