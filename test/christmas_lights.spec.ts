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

  it('has 2000 lights lit if you turn on the first and the second row', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstRow = { x: 0, y: 0 };
    const endOfSecondRow = { x: 999, y: 1 };

    christmasLights.turnOn(startOfFirstRow, endOfSecondRow);

    expect(christmasLights.getAmountLit()).toBe(2e3);
  });

  it('has 1000 lights lit if you turn on the second row', () => {
    const christmasLights = new ChristmasLights();
    const startOfSecondRow = { x: 0, y: 1 };
    const endOfSecondRow = { x: 999, y: 1 };

    christmasLights.turnOn(startOfSecondRow, endOfSecondRow);

    expect(christmasLights.getAmountLit()).toBe(1e3);
  });

  it('has 1000 lights lit if you turn on the first column', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const endOfFirstColumn = { x: 0, y: 999 };

    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);

    expect(christmasLights.getAmountLit()).toBe(1e3);
  });

  it('has 500 lights lit if you turn on the half of the first column', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const middleOfFirstColumn = { x: 0, y: 499 };

    christmasLights.turnOn(startOfFirstColumn, middleOfFirstColumn);

    expect(christmasLights.getAmountLit()).toBe(500);
  });

  it('has 500 lights lit if you turn on the second half of the first column', () => {
    const christmasLights = new ChristmasLights();
    const middleOfFirstColumn = { x: 0, y: 500 };
    const endOfFirstColumn = { x: 0, y: 999 };

    christmasLights.turnOn(middleOfFirstColumn, endOfFirstColumn);

    expect(christmasLights.getAmountLit()).toBe(500);
  });

  it('has 2000 lights lit if you turn on 1000 lights and then 1000 more', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const endOfFirstColumn = { x: 0, y: 999 };
    const startOfSecondColumn = { x: 1, y: 0 };
    const endOfSecondColumn = { x: 1, y: 999 };

    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);
    christmasLights.turnOn(startOfSecondColumn, endOfSecondColumn);

    expect(christmasLights.getAmountLit()).toBe(2e3);
  });

  it('does not take into account when the same lights are turned on several times', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const endOfFirstColumn = { x: 0, y: 999 };
    const startOfSecondColumn = { x: 1, y: 0 };
    const endOfSecondColumn = { x: 1, y: 999 };

    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);
    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);

    christmasLights.turnOn(startOfSecondColumn, endOfSecondColumn);
    christmasLights.turnOn(startOfSecondColumn, endOfSecondColumn);

    expect(christmasLights.getAmountLit()).toBe(2e3);
  });

  it('has 500 lights lit if you turn on 1000 lights and then turn off 500 of them', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const middleOfFirstColumn = { x: 500, y: 0 };
    const endOfFirstColumn = { x: 999, y: 0 };

    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);

    christmasLights.turnOff(middleOfFirstColumn, endOfFirstColumn);

    expect(christmasLights.getAmountLit()).toBe(500);
  });

  it('does nothing when turnning off lights that are not lit', () => {
    const christmasLights = new ChristmasLights();
    const startOfFirstColumn = { x: 0, y: 0 };
    const endOfFirstColumn = { x: 999, y: 0 };
    const startOfSecondRow = { x: 0, y: 1 };
    const endOfSecondRow = { x: 999, y: 1 };

    christmasLights.turnOn(startOfFirstColumn, endOfFirstColumn);

    christmasLights.turnOff(startOfSecondRow, endOfSecondRow);

    expect(christmasLights.getAmountLit()).toBe(1000);
  });
});