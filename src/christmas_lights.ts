export class ChristmasLights {
  private amountLit: number = 0;
  private litAreas: Array<Area> = [];

  getAmountLit() {
    return this.amountLit;
  }

  turnOn(start: Coordinate, end: Coordinate) {
    const areaToTurnOn = new Area(start, end);

    if (this.litAreas.some(litArea => litArea.equals(areaToTurnOn))) {
      return;
    }

    this.litAreas.push(areaToTurnOn);
    this.amountLit += areaToTurnOn.getAmountOfLights();
  }

  turnOff(start: Coordinate, end: Coordinate) {
    const areaToTurnOff = new Area(start, end);
    this.amountLit -= areaToTurnOff.getAmountOfLights();
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

  includes(otherArea) {

  }

  getAmountOfLights() {
    const horizontalLength = this.end.x - this.start.x + 1;
    const verticalLength = this.end.y - this.start.y + 1;

    return horizontalLength * verticalLength;
  }
}