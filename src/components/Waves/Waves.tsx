import { useEffect, useState, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min.js";
import Instructions from "../Instructions/Instructions";
import UserGameboard from "../Gameboard/UserGameboard";
import ComputerGameboard from "../Gameboard/ComputerGameboard";
import { useGameContext } from "../../context/GameContext";
import EndGameModal from "../EndGameModal/EndGameModal";

const Waves = () => {
  const { gameInfo, changeGamePhase }: any = useGameContext();

  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x101e36,
          waveHeight: 30.0,
          waveSpeed: 0.4,
          zoom: 0.81,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // useEffect(() => {
  //   console.log(gameInfo);
  //   if (gameInfo.score.human >= 17) {
  //     changeGamePhase("gameOver", "human");
  //   }
  //   if (gameInfo.score.computer >= 17) {
  //     changeGamePhase("gameOver", "computer");
  //   }
  // }, [gameInfo.score.human, gameInfo.score.computer, gameInfo.score]);

  return (
    <div
      ref={myRef}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100vw",
        height: "700px",
      }}
    >
      <Instructions />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "450px",
          height: "450px",
        }}
      >
        <UserGameboard
          size={gameInfo.phase === "enteringShips" ? "large" : "small"}
        />
        {gameInfo.phase !== "enteringShips" && (
          <ComputerGameboard size="large" />
        )}
      </div>
      {gameInfo.phase === "gameOver" ? <EndGameModal /> : null}
    </div>
  );
};

export default Waves;
