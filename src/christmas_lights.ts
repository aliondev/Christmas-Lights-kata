export class ChristmasLights {
  private amountLit: number = 0;
  private litAreas: Array<Area> = [];

  getAmountLit() {
    return this.amountLit;
  }

  turnOn(start: Coordinate, end: Coordinate) {
    const horizontalLength = (end.x - start.x) + 1;
    const verticalLength = end.y - start.y + 1;
    const areaToTurnOn = new Area(start, end);

    if (this.litAreas.some(litArea => litArea.equals(areaToTurnOn))) {
      return;
    }

    this.litAreas.push(new Area(start, end));
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

class Area {
  constructor(readonly start: Coordinate, readonly end: Coordinate) {}

  equals(otherArea) {
    if (this.start.x !== otherArea.start.x ||
          this.start.y !== otherArea.start.y ||
          this.end.x !== otherArea.end.x ||
          this.end.y !== otherArea.end.y
      ) {
        return false;
      }

      return true;
  }
}