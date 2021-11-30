import { useBattleship } from "../../context/GameContext";

import Square from "../Square/Square";

const Ocean: React.FC = () => {
  const { ocean } = useBattleship();

  return ocean.map((item: any, index1: any) => {
    return (
      <div
        key={index1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        {item.map((item: any, index2: any) => {
          return (
            <Square
              key={index2}
              coordinates={[index1, index2]}
              squareValue={item}
            />
          );
        })}
      </div>
    );
  });
};

export default Ocean;
