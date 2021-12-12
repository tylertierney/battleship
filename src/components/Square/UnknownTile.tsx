import { ReactElement, ReactHTMLElement, useState, useEffect } from "react";

import "../../App.css";

import { useGameContext } from "../../context/GameContext";
import { useOceanContext } from "../../context/OceanContext";

export const missedShot = (
  <div
    style={{
      height: "75%",
      width: "75%",
      borderRadius: "50%",
      opacity: "0.5",
      border: "solid white 2.5px",
    }}
  ></div>
);

export const hitShot = (
  <div
    style={{
      height: "75%",
      width: "75%",
      borderRadius: "50%",
      opacity: "0.9",
      border: "solid red 3px",
      backgroundColor: "var(--disabledShipColor)",
    }}
  ></div>
);

interface UnknownTileProps {
  coordinates: any[];
  squareValue: number;
}

const UnknownTile: React.FC<UnknownTileProps> = ({
  coordinates,
  squareValue,
}) => {
  const { ocean } = useOceanContext();

  const [clickIsDisabled, setClickIsDisabled] = useState(false);

  const { gameInfo, changeGamePhase, updateScore, takeAShot }: any =
    useGameContext();

  const [inner, setInner] = useState<string | ReactElement>("");

  const handleClick = (coordinates: any) => {
    takeAShot("human", coordinates, null);
    if (squareValue === 0) {
      setInner(missedShot);
    }
    if (squareValue > 0) {
      setInner(hitShot);
      updateScore("human");
    }

    setClickIsDisabled(() => true);
    takeAShot("computer", null, ocean);
  };

  useEffect(() => {
    console.log(gameInfo);
    if (gameInfo.score.human >= 17) {
      changeGamePhase("gameOver", "human");
    }
    if (gameInfo.score.computer >= 17) {
      changeGamePhase("gameOver", "computer");
    }
  }, [gameInfo.score.human, gameInfo.score.computer, gameInfo.score]);

  // console.log(gameInfo.score.computer);

  return (
    <div
      onClick={clickIsDisabled ? undefined : () => handleClick(coordinates)}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "none",
      }}
    >
      {inner}
    </div>
  );
};

export default UnknownTile;
