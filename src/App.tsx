import OceanProvider from "./context/GameContext";
import Ocean from "./components/Ocean/Ocean";
import { useState } from "react";
import Instructions from "./components/Instructions/Instructions";

const App: React.FC = () => {
  const ships = [
    { name: "Battleship", length: 4, orientation: "Horizontal" },
    { name: "Carrier", length: 5, orientation: "Horizontal" },
    { name: "Cruiser", length: 3, orientation: "Horizontal" },
    { name: "Submarine", length: 3, orientation: "Horizontal" },
    { name: "Destroyer", length: 2, orientation: "Horizontal" },
  ];

  const [isEnteringShips, setIsEnteringShips] = useState(true);
  const [shipToPlace, setShipToPlace] = useState(ships[0]);

  return (
    <OceanProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isEnteringShips ? (
          <Instructions
            shipToPlace={shipToPlace}
            setShipToPlace={setShipToPlace}
          />
        ) : null}
        <Ocean shipToPlace={shipToPlace} setShipToPlace={setShipToPlace} />
      </div>
    </OceanProvider>
  );
};

export default App;
