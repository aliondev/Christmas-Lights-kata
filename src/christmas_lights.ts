export class ChristmasLights {
  private amountLit: number = 0;

  getAmountLit() {
    return this.amountLit;
  }

  turnOn(start: Coordinate, end: Coordinate) {
    const horizontalLength = (end.x - start.x) + 1;
    const verticalLength = end.y - start.y + 1;

    this.amountLit += horizontalLength * verticalLength;
  }

  turnOff(start: Coordinate, end: Coordinate) {
    this.amountLit = 0;
  }
}

type Coordinate = {
  x: number;
  y: number;
}