import OceanProvider from "./context/GameContext";

import ShipProvider from "./context/ShipContext";

import SquareSizeProvider from "./context/SquareSize";

import Waves from "./components/Waves/Waves";

const App: React.FC = () => {
  return (
    <SquareSizeProvider>
      <OceanProvider>
        <ShipProvider>
          <Waves />
        </ShipProvider>
      </OceanProvider>
    </SquareSizeProvider>
  );
};

export default App;
