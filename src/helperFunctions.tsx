import { Ship } from "./context/ShipConstructor";

export const confirmShipPlacement = (
  copyOfOcean: any,
  arr: any,
  orientation: any
) => {
  for (let i = 0; i < arr.length; i++) {
    let xVal = arr[i].coords[0];
    let yVal = arr[i].coords[1];

    // If the tile is an end piece, determine whether it's up, right, left, or down
    if (i === 0) {
      if (orientation === "Horizontal") {
        copyOfOcean[xVal][yVal] = 2;
      } else {
        copyOfOcean[xVal][yVal] = 4;
      }
    } else if (i === arr.length - 1) {
      if (orientation === "Horizontal") {
        copyOfOcean[xVal][yVal] = 3;
      } else {
        copyOfOcean[xVal][yVal] = 5;
      }
    } else {
      copyOfOcean[xVal][yVal] = 1;
    }
  }
  return copyOfOcean;
};

export const checkIfShipOutOfBounds = (
  arr: any,
  shipTile: any,
  inner: any,
  handleClick: any,
  coordinates: any,
  ocean: any
) => {
  for (let i = 0; i < arr.length; i++) {
    const shipCoordX = arr[i].coords[0];
    const shipCoordY = arr[i].coords[1];

    // This checks if a square is "beneath" the ship while it is hovering
    if (shipCoordX === coordinates[0] && shipCoordY === coordinates[1]) {
      // inner = shipTile;
      inner = (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0, 0, 0, 0.3)",
            zIndex: -1,
          }}
        ></div>
      );
    }

    // This checks if any of the squares on the ship are out of bounds
    if (shipCoordX < 0 || shipCoordX > 7) {
      return { inner: null, handleClick: null };
    }
    if (shipCoordY < 0 || shipCoordY > 7) {
      return { inner: null, handleClick: null };
    }

    if (ocean[shipCoordX][shipCoordY] != 0) {
      inner = null;
      handleClick = null;
    }
  }

  return { inner, handleClick };
};

export const getCoordArrayFromShip: any = (
  length: number,
  orientation: string,
  targetX: number | null,
  targetY: number | null
) => {
  if (targetX === null || targetY === null) {
    return null;
  }

  let arr: any = Array(length).fill(0);
  if (orientation === "Vertical") {
    for (let i = -1; i < arr.length - 1; i++) {
      arr[i + 1] = {
        coords: [targetX + i, targetY],
        isHit: false,
      };
    }
  } else {
    for (let i = -1; i < arr.length - 1; i++) {
      arr[i + 1] = {
        coords: [targetX, targetY + i],
        isHit: false,
      };
    }
  }
  return arr;
};

export const handleHover = (
  e: any,
  ref: any,
  oceanOffsetX: any,
  oceanOffsetY: any
) => {
  const target = e.target;

  const x = e.clientX - oceanOffsetX;
  const y = e.clientY - oceanOffsetY;

  ref = ref.current;

  ref.style.top = y + "px";
  ref.style.left = x + "px";
};

export const handleMouseEnter = (ref: any) => {
  if (ref.current) {
    ref.current.style.display = "flex";
    ref.current.style.visibility = "visible";
  }
};

export const handleMouseLeave = (ref: any) => {
  if (ref.current) {
    ref.current.style.display = "none";
    ref.current.style.visibility = "hidden";
  }
};

export const generateComputerOcean = () => {
  const checkForVerticalShipCollision = (
    length: number,
    ocean: any,
    row: number,
    column: number
  ) => {
    for (let i = row, j = 0; j < length; j++, i++) {
      if (i > 7) {
        return false;
      }
      if (ocean[i][column] != 0) {
        return false;
      }
      console.log("row: " + row + "column: " + column);
    }
    return true;
  };

  const ships: any = {
    battleship: { values: [4, 1, 1, 5], orientation: "Vertical" },
    carrier: { values: [2, 1, 1, 1, 3], orientation: "Horizontal" },
    cruiser: { values: [2, 1, 3], orientation: "Horizontal" },
    submarine: { values: [2, 1, 3], orientation: "Horizontal" },
    destroyer: { values: [2, 3], orientation: "Horizontal" },
  };

  // Randomly choose an orientation for each ship
  // for (const ship in ships) {
  //   const random: number = Math.floor(Math.random() * 2);
  //   const thisShip = ships[ship];
  //   // If orientation ends up vertical, change the end pieces
  //   if (random) {
  //     thisShip.orientation = "Vertical";
  //     thisShip.values[0] = 4;
  //     thisShip.values[thisShip.values.length - 1] = 5;
  //   }
  // }

  let ocean = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));

  // Place the horizontal ships randomly

  let possibleRows = [0, 1, 2, 3, 4, 5, 6, 7];

  for (const ship in ships) {
    const thisShip = ships[ship];
    const values = thisShip.values;
    if (thisShip.orientation === "Horizontal") {
      let randomVal = Math.floor(Math.random() * possibleRows.length);
      let row = possibleRows[randomVal];
      possibleRows.splice(randomVal, 1);
      let column = Math.floor(Math.random() * (8 - values.length - 1));
      for (let j = 0; j < values.length; column++, j++) {
        ocean[row][column] = values[j];
      }
    }
  }
  for (const ship in ships) {
    const thisShip = ships[ship];
    const values = thisShip.values;
    if (thisShip.orientation === "Vertical") {
      // let randomColumn = Math.floor(Math.random() * 8);
      // let randomRow = Math.floor(Math.random() * (8 - values.length - 1));

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (checkForVerticalShipCollision(values.length, ocean, i, j)) {
            for (let z = 0; z < values.length; z++, i++) {
              ocean[i][j] = values[z];
            }
            break;
          }
        }
      }
    }
  }
  console.log(ocean);
  return ocean;
};
