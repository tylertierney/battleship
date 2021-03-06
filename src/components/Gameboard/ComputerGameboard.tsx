import Numbers from "../Numbers/Numbers";
import Letters from "../Letters/Letters";
import ComputerOcean from "../Ocean/ComputerOcean";

import { useEffect, useState, useRef } from "react";

import { useSquareSize } from "../../context/SquareSize";

import { useGameContext } from "../../context/GameContext";

interface CompGameboardProps {
  size: string;
}

const ComputerGameboard: React.FC<CompGameboardProps> = ({ size }) => {
  const { gameInfo }: any = useGameContext();
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

  let styles: any = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    transform: "none",
    position: "relative",
    transition: "0.6s ease-in-out",
  };

  if (size === "small") {
    styles.position = "absolute";
    styles.top = "-61%";
    styles.left = "0";
    styles.transform = "scale(25%)";
  }

  return (
    <>
      <div style={styles}>
        <Letters />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 8 * squareSize + "px",
          }}
        >
          <Numbers />
          <ComputerOcean
            oceanRef={oceanRef}
            oceanOffsetX={oceanOffsetX}
            oceanOffsetY={oceanOffsetY}
          />
        </div>
      </div>
    </>
  );
};

export default ComputerGameboard;
