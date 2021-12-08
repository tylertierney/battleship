import OceanProvider from "./context/GameContext";

import ShipProvider from "./context/ShipContext";

import { useEffect } from "react";

import Waves from "./components/Waves/Waves";

const App: React.FC = () => {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );

    document.getElementsByTagName("head")[0].appendChild(threeScript);

    return () => {
      if (threeScript) threeScript.remove();
    };
  }, []);

  return (
    <OceanProvider>
      <ShipProvider>
        <Waves />
      </ShipProvider>
    </OceanProvider>
  );
};

export default App;
