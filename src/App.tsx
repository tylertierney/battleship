import OceanProvider from "./context/OceanContext";

import ShipProvider from "./context/ShipContext";

import SquareSizeProvider from "./context/SquareSize";

import Waves from "./components/Waves/Waves";

import GameContextProvider from "./context/GameContext";

const App: React.FC = () => {
  return (
    <SquareSizeProvider>
      <GameContextProvider>
        <OceanProvider>
          <ShipProvider>
            <Waves />
          </ShipProvider>
        </OceanProvider>
      </GameContextProvider>
    </SquareSizeProvider>
  );
};

export default App;
