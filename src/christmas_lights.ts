export class ChristmasLights {
  private amountLit: number = 0;

  getAmountLit() {
    return this.amountLit;
  }

  turnOn(start: Coordinate, end: Coordinate) {
    this.amountLit = 1e6;
  }
}

type Coordinate = {
  x: number;
  y: number;
}