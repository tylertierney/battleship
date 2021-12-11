export class Ship {
  name: string;
  length: number;
  orientation: string;
  coordinateArray: number[][] | null;
  isCurrent: boolean;

  constructor(
    name: string,
    length: number,
    orientation: string,
    coordinateArray: number[][] | null,
    isCurrent: boolean
  ) {
    this.name = name;
    this.length = length;
    this.orientation = orientation;
    this.coordinateArray = coordinateArray;
    this.isCurrent = isCurrent;
  }
}
