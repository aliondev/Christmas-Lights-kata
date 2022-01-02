import { ChristmasLights } from '../src/christmas_lights';

describe('Christmas lights kata', () => {
  it('has all the lights off initially', () => {
    const christmasLights = new ChristmasLights();

    expect(christmasLights.getAmountLit()).toBe(0);
  });

  it('has all the lights lit if you turn on all', () => {
    const christmasLights = new ChristmasLights();
    const topLeftCorner = { x: 0, y: 0 };
    const bottomRightCorner = { x: 999, y: 999};

    christmasLights.turnOn(topLeftCorner, bottomRightCorner);

    expect(christmasLights.getAmountLit()).toBe(1e6);
  });

  it('does not have any light lit if you turn off all', () => {
    const christmasLights = new ChristmasLights();
    const topLeftCorner = { x: 0, y: 0 };
    const bottomRightCorner = { x: 999, y: 999 };

    christmasLights.turnOn(topLeftCorner, bottomRightCorner);
    christmasLights.turnOff(topLeftCorner, bottomRightCorner);

    expect(christmasLights.getAmountLit()).toBe(0);
  });

  it('has 1000 lights lit if you turn on the first row', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstRow = { x: 0, y: 0 };
    const endOfFirstRow = { x: 999, y: 0 };

    christmasLights.turnOn(startOfFirstRow, endOfFirstRow);

    expect(christmasLights.getAmountLit()).toBe(1e3);
  });

  it('has 1000 lights lit if you turn on the first column', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const endOfFirstColumn = { x: 0, y: 999 };

    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);

    expect(christmasLights.getAmountLit()).toBe(1e3);
  });
});