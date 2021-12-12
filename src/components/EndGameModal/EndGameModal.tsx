import { useGameContext } from "../../context/GameContext";

const EndGameModal = () => {
  const { gameInfo }: any = useGameContext();

  let result = "You Win!";

  if (gameInfo.winner === "computer") {
    result = "You Lose!";
  }

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#101e36",
          borderRadius: "16px",
          padding: "2rem",
          color: "white",
          flexDirection: "column",
          minWidth: "300px",
        }}
      >
        <h1>{result}</h1>
      </div>
    </div>
  );
};

export default EndGameModal;
