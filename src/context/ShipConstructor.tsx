export class Ship {
  name: string;
  length: number;
  orientation: string;
  mainX: number | null;
  mainY: number | null;

  constructor(
    name: string,
    length: number,
    orientation: string,
    mainX: number | null,
    mainY: number | null
  ) {
    this.name = name;
    this.length = length;
    this.orientation = orientation;
    this.mainX = mainX;
    this.mainY = mainY;
  }
}
