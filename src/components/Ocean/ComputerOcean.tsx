import { useOceanContext } from "../../context/OceanContext";

import { useSquareSize } from "../../context/SquareSize";

import "../../App.css";

import EmptyTile from "../Square/EmptyTile";

import { useState } from "react";

import GridOverlay from "../GridOverlay/GridOverlay";

import { useRef } from "react";

import TargetCursor from "../TargetCursor/TargetCursor";

import {
  handleHover,
  handleMouseEnter,
  handleMouseLeave,
} from "../../helperFunctions";

import { useGameContext } from "../../context/GameContext";

import UnknownTile from "../Square/UnknownTile";

interface OceanProps {
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
        onMouseEnter={(e) => handleMouseEnter(hoverRef)}
        onMouseMove={(e) =>
          handleHover(e, hoverRef, oceanOffsetX, oceanOffsetY)
        }
        onMouseLeave={(e) => handleMouseLeave(hoverRef)}
      >
        <GridOverlay />
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
                  <UnknownTile
                    key={index2}
                    coordinates={coordinates}
                    squareValue={item}
                  />
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
