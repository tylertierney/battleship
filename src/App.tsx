import OceanProvider from "./context/GameContext";
import Ocean from "./components/Ocean/Ocean";

const App: React.FC = () => {
  return (
    <OceanProvider>
      <Ocean></Ocean>
    </OceanProvider>
  );
};

export default App;
