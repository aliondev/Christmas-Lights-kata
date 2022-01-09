export class ChristmasLightsV2 {
  private litBulbs: { [key: string]: number } = {};

  getBrightness() {
    return Object.values(this.litBulbs).reduce((prev, curr) => {
      prev += curr;
      return prev;
    }, 0);
  }

  toggle(start: Coordinate, end: Coordinate) {
    const litBulbsKeys = this.getLitBulbsKeysForArea(start, end);

    litBulbsKeys.forEach((key) => {
      this.litBulbs[key] = this.litBulbs[key] ? this.litBulbs[key] + 2 : 2;
    });
  }

  turnOn(start: Coordinate, end: Coordinate) {
    const litBulbsKeys = this.getLitBulbsKeysForArea(start, end);
    litBulbsKeys.forEach((key) => {
      this.litBulbs[key] = this.litBulbs[key] ? this.litBulbs[key] + 1 : 1;
    });
  }

  turnOff(start: Coordinate, end: Coordinate) {
    const litBulbsKeys = this.getLitBulbsKeysForArea(start, end);
    litBulbsKeys.forEach((key) => {

      if (!this.litBulbs[key]) {
        return;
      }

      if (this.litBulbs[key] === 1) {
        delete this.litBulbs[key];
        return;
      }

      this.litBulbs[key] -= 1;
    });
  }

  private getLitBulbsKeysForArea(
    start: Coordinate,
    end: Coordinate,
  ): Array<string> {
    const litBulbsKeys = [];

    for (let x = start.x; x <= end.x; x++) {
      for (let y = start.y; y <= end.y; y++) {
        litBulbsKeys.push(`${x}__${y}`);
      }
    }

    return litBulbsKeys;
  }
}

type Coordinate = {
  x: number;
  y: number;
};
