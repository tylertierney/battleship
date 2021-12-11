import { useOceanContext } from "../../context/OceanContext";

import { useSquareSize } from "../../context/SquareSize";

import "../../App.css";

import EmptyTile from "../Square/EmptyTile";

import { useState } from "react";

import GridOverlay from "../GridOverlay/GridOverlay";

import ShipTile from "../Square/ShipTile";
import EndPiece from "../Square/EndPiece";
import { useRef } from "react";

import HoveredShip from "../HoveredShip/HoveredShip";

import {
  handleHover,
  handleMouseEnter,
  handleMouseLeave,
} from "../../helperFunctions";

import { useGameContext } from "../../context/GameContext";

interface OceanProps {
  // setIsEnteringShips: Function;
  // isEnteringShips: boolean;
  oceanRef: any;
  oceanOffsetX: number | null;
  oceanOffsetY: number | null;
  isPlayer: boolean;
}

const Ocean: React.FC<OceanProps> = ({
  oceanRef,
  oceanOffsetX,
  oceanOffsetY,
  isPlayer,
}) => {
  const { gameInfo }: any = useGameContext();
  const hoverRef = useRef<HTMLDivElement>(null);

  const { squareSize, setSquareSize }: any = useSquareSize();

  const { ocean, computerOcean } = useOceanContext();

  const [isHovering, setIsHovering] = useState([null, null]);

  const [placementIsDisabled, setPlacementIsDisabled] = useState(true);

  const oceanToMap = isPlayer ? ocean : computerOcean;

  return (
    <>
      <div
        ref={oceanRef}
        style={{
          height: 8 * squareSize + "px",
          width: 8 * squareSize + "px",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={
          gameInfo.phase === "enteringShips"
            ? (e) => handleMouseEnter(hoverRef)
            : undefined
        }
        onMouseMove={(e) =>
          gameInfo.phase === "enteringShips"
            ? handleHover(e, hoverRef, oceanOffsetX, oceanOffsetY)
            : undefined
        }
        onMouseLeave={
          gameInfo.phase === "enteringShips"
            ? (e) => handleMouseLeave(hoverRef)
            : undefined
        }
      >
        <GridOverlay />
        {gameInfo.phase === "enteringShips" && (
          <HoveredShip
            hoverRef={hoverRef}
            placementIsDisabled={placementIsDisabled}
          />
        )}
        {oceanToMap.map((item: any, index1: any) => {
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
                        placementIsDisabled={placementIsDisabled}
                        setPlacementIsDisabled={setPlacementIsDisabled}
                        // setIsEnteringShips={setIsEnteringShips}
                        // isEnteringShips={isEnteringShips}
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
        {gameInfo.phase === "playing" && (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Ocean;
