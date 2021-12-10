import { useGameContext } from "../../context/GameContext";
import { useShip } from "../../context/ShipContext";

import { useSquareSize } from "../../context/SquareSize";

import "../../App.css";

import EmptyTile from "../Square/EmptyTile";

import { useState } from "react";

import GridOverlay from "../GridOverlay/GridOverlay";

import ShipTile from "../Square/ShipTile";
import EndPiece from "../Square/EndPiece";
import { useEffect, useRef } from "react";

import { generateLetters, generateNumbers } from "../../helperFunctions";

import HoveredShip from "../HoveredShip/HoveredShip";

import { handleHover } from "../../helperFunctions";

import Numbers from "../Numbers/Numbers";
import Letters from "../Letters/Letters";

const Ocean: React.FC = () => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const oceanRef = useRef<HTMLDivElement>(null);

  const { squareSize, setSquareSize }: any = useSquareSize();

  const [oceanOffsetX, setOceanOffsetX] = useState(0);
  const [oceanOffsetY, setOceanOffsetY] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 400) {
      setSquareSize(38);
    } else {
      setSquareSize(50);
    }

    if (oceanRef.current) {
      setOceanOffsetX(oceanRef.current.getBoundingClientRect().left);
      setOceanOffsetY(oceanRef.current.getBoundingClientRect().top);
    }
  }, [window.innerWidth, oceanRef.current]);

  const { ocean } = useGameContext();

  const [isHovering, setIsHovering] = useState([null, null]);

  let letters = generateLetters();
  let numbers = generateNumbers();

  const handleMouseEnter = () => {
    if (hoverRef.current) {
      hoverRef.current.style.display = "flex";
      hoverRef.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    if (hoverRef.current) {
      hoverRef.current.style.display = "none";
      hoverRef.current.style.visibility = "hidden";
    }
  };

  const [placementIsDisabled, setPlacementIsDisabled] = useState(true);

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
        <Letters letters={letters} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 8 * squareSize + "px",
          }}
        >
          <Numbers numbers={numbers} />
          <div
            ref={oceanRef}
            style={{
              height: 8 * squareSize + "px",
              width: 8 * squareSize + "px",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => handleMouseEnter()}
            onMouseMove={(e) =>
              handleHover(e, hoverRef, oceanOffsetX, oceanOffsetY)
            }
            onMouseLeave={(e) => handleMouseLeave()}
          >
            <GridOverlay />
            <HoveredShip
              hoverRef={hoverRef}
              placementIsDisabled={placementIsDisabled}
            />
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
                    // zIndex: 1,
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
                            placementIsDisabled={placementIsDisabled}
                            setPlacementIsDisabled={setPlacementIsDisabled}
                          />
                        );
                      case 1:
                        return (
                          <ShipTile key={index2} shipColor="var(--shipColor)" />
                        );
                      default:
                        return (
                          <EndPiece
                            key={index2}
                            coordinates={coordinates}
                            squareValue={item}
                            shipColor="var(--shipColor)"
                          />
                        );
                    }
                  })}
                </div>
              );
            })}
            {/* <HoveredShip
              hoverRef={hoverRef}
              placementIsDisabled={placementIsDisabled}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ocean;
