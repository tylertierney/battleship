import OceanProvider from "./context/GameContext";
import Ocean from "./components/Ocean/Ocean";
import { useState } from "react";
import Instructions from "./components/Instructions/Instructions";

import { useShip } from "./context/ShipContext";

import ShipProvider from "./context/ShipContext";

const App: React.FC = () => {
  const { currentShip } = useShip();

  // const ships = [
  //   {
  //     name: "Battleship",
  //     length: 4,
  //     orientation: "Horizontal",
  //     coordinateArray: new Array(4).fill([null, null]),
  //   },
  //   {
  //     name: "Carrier",
  //     length: 5,
  //     orientation: "Horizontal",
  //     coordinateArray: new Array(4).fill([null, null]),
  //   },
  //   {
  //     name: "Cruiser",
  //     length: 3,
  //     orientation: "Horizontal",
  //     coordinateArray: new Array(4).fill([null, null]),
  //   },
  //   {
  //     name: "Submarine",
  //     length: 3,
  //     orientation: "Horizontal",
  //     coordinateArray: new Array(4).fill([null, null]),
  //   },
  //   {
  //     name: "Destroyer",
  //     length: 2,
  //     orientation: "Horizontal",
  //     coordinateArray: new Array(4).fill([null, null]),
  //   },
  // ];

  const [isEnteringShips, setIsEnteringShips] = useState(true);
  // const [shipToPlace, setShipToPlace] = useState(ships[0]);

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
      </ShipProvider>
    </OceanProvider>
  );
};

export default App;
