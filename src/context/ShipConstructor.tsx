export class Ship {
  name: string;
  length: number;
  orientation: string;
  mainX: number | null;
  mainY: number | null;
  coordinateArray: number[][] | null;
  isCurrent: boolean;

  constructor(
    name: string,
    length: number,
    orientation: string,
    mainX: number | null,
    mainY: number | null,
    coordinateArray: number[][] | null,
    isCurrent: boolean
  ) {
    this.name = name;
    this.length = length;
    this.orientation = orientation;
    this.mainX = mainX;
    this.mainY = mainY;
    this.coordinateArray = coordinateArray;
    this.isCurrent = isCurrent;
  }
}
