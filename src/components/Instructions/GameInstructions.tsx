import { useGameContext } from "../../context/GameContext";

const GameInstructions = () => {
  const { gameInfo }: any = useGameContext();

  return (
    <div
      style={{
        minHeight: "150px",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <h3 style={{ margin: "0" }}>You</h3>
        <h1
          style={{ margin: "0", minWidth: "5rem" }}
        >{`${gameInfo.score.human}/17`}</h1>
      </div>
      <h1 style={{ margin: "8px 2rem" }} className="instructionsHeader">
        Take the shot!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <h3 style={{ margin: "0" }}>Computer</h3>
        <h1
          style={{ margin: "0", minWidth: "5rem" }}
        >{`${gameInfo.score.computer}/17`}</h1>
      </div>
    </div>
  );
};

export default GameInstructions;
