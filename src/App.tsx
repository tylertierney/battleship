import OceanProvider from "./context/GameContext";
import Ocean from "./components/Ocean/Ocean";
import { useState } from "react";
import Instructions from "./components/Instructions/Instructions";

import { useShip } from "./context/ShipContext";

import { useBattleship } from "./context/GameContext";

import ShipProvider from "./context/ShipContext";

const App: React.FC = () => {
  const { currentShip } = useShip();

  const { ocean } = useBattleship();

  const [isEnteringShips, setIsEnteringShips] = useState(true);

  return (
    <OceanProvider>
      <ShipProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isEnteringShips ? <Instructions /> : null}
          <Ocean />
        </div>
        <button onClick={() => console.log(ocean)}>ocean</button>
      </ShipProvider>
    </OceanProvider>
  );
};

export default App;
