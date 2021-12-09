import { useEffect, useState, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min.js";

import Ocean from "../Ocean/Ocean";
import Instructions from "../Instructions/Instructions";

import { useShip } from "../../context/ShipContext";

const Waves = () => {
  const { ships, currentShip } = useShip();

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
          color: 0x12242f,
          waveHeight: 30.0,
          waveSpeed: 0.25,
          zoom: 0.81,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const [isEnteringShips, setIsEnteringShips] = useState(true);

  return (
    <div
      ref={myRef}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "700px",
      }}
    >
      {isEnteringShips ? <Instructions /> : null}
      <Ocean />
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: "100vw",
    //     height: "700px",
    //     backgroundColor: "#12242f",
    //   }}
    // >
    //   {isEnteringShips ? <Instructions /> : null}
    //   <Ocean />
    // </div>
  );
};

export default Waves;
