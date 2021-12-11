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
import TargetCursor from "../TargetCursor/TargetCursor";

import {
  handleHover,
  handleMouseEnter,
  handleMouseLeave,
} from "../../helperFunctions";

import { useGameContext } from "../../context/GameContext";

import UnknownTile from "../Square/UnknownTile";

interface OceanProps {
  // setIsEnteringShips: Function;
  // isEnteringShips: boolean;
  oceanRef: any;
  oceanOffsetX: number | null;
  oceanOffsetY: number | null;
}

const ComputerOcean: React.FC<OceanProps> = ({
  oceanRef,
  oceanOffsetX,
  oceanOffsetY,
}) => {
  const { gameInfo }: any = useGameContext();
  const hoverRef = useRef<HTMLDivElement>(null);

  const { squareSize, setSquareSize }: any = useSquareSize();

  const { ocean, computerOcean } = useOceanContext();

  const [isHovering, setIsHovering] = useState([null, null]);

  const [placementIsDisabled, setPlacementIsDisabled] = useState(true);

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
          // gameInfo.phase === "enteringShips"
          //   ?
          (e) => handleMouseEnter(hoverRef)
          // : undefined
        }
        onMouseMove={
          (e) =>
            // gameInfo.phase === "enteringShips"
            //   ?
            handleHover(e, hoverRef, oceanOffsetX, oceanOffsetY)
          // : undefined
        }
        onMouseLeave={
          // gameInfo.phase === "enteringShips"
          //   ?
          (e) => handleMouseLeave(hoverRef)
          // : undefined
        }
      >
        <GridOverlay />
        {/* {gameInfo.phase === "enteringShips" && (
          <HoveredShip
            hoverRef={hoverRef}
            placementIsDisabled={placementIsDisabled}
          />
        )} */}
        <TargetCursor hoverRef={hoverRef} />
        {computerOcean.map((item: any, index1: any) => {
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

                return (
                  <UnknownTile coordinates={coordinates} squareValue={item} />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ComputerOcean;
