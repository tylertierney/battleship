import { ShipInterface } from "./context/GameContext";

export const activateShipTiles = (
  shipToPlace: ShipInterface,
  copyOfOcean: any,
  coordinates: number[]
) => {
  const xCoord = coordinates[0];
  const yCoord = coordinates[1];

  switch (shipToPlace.name) {
    case "Battleship":
      copyOfOcean[xCoord][yCoord] = 1;
      copyOfOcean[xCoord - 1][yCoord] = 1;
      copyOfOcean[xCoord - 2][yCoord] = 1;
      copyOfOcean[xCoord + 1][yCoord] = 1;
      break;
    case "Carrier":
      //do something
      break;
  }

  return copyOfOcean;
};
