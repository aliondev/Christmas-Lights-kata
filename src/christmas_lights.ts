export class ChristmasLights {
  private litBulbs: { [key: string]: number } = {}

  getAmountLit() {
    return Object.keys(this.litBulbs).length;
  }

  turnOn(start: Coordinate, end: Coordinate) {
    const litBulbsKeys = this.getLitBulbsKeysForArea(start, end);
    litBulbsKeys.forEach(litBulbKey => { this.litBulbs[litBulbKey] = 1 });
  }

  turnOff(start: Coordinate, end: Coordinate) {
   const litBulbsKeys = this.getLitBulbsKeysForArea(start, end);
   litBulbsKeys.forEach((litBulbKey) => {
     delete this.litBulbs[litBulbKey];
   });
  }

  private getLitBulbsKeysForArea(start: Coordinate, end: Coordinate): Array<string> {
    const litBulbsKeys = [];

    for (let x=start.x; x<=end.x; x++) {
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
}
