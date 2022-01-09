import { ChristmasLightsV2 } from '../src/christmas_lights_v2';

const START_OF_FIRST_COLUMN = { x: 0, y: 0 };
const END_OF_FIRST_COLUMN = { x: 0, y: 999 };
const START_OF_FIRST_ROW = { x: 0, y: 0 };
const END_OF_FIRST_ROW = { x: 999, y: 0 };
const START_OF_SECOND_ROW = { x: 0, y: 1 };
const END_OF_SECOND_ROW = { x: 999, y: 1 };

describe('Christmas lights kata', () => {
  it('has all the lights off initially', () => {
    const christmasLights = new ChristmasLightsV2();

    expect(christmasLights.getAmountLit()).toBe(0);
  });

  describe('turn on', () => {
    it('has all the lights lit if you turn on all', () => {
      const christmasLights = new ChristmasLightsV2();
      const topLeftCorner = { x: 0, y: 0 };
      const bottomRightCorner = { x: 999, y: 999 };

      christmasLights.turnOn(topLeftCorner, bottomRightCorner);

      expect(christmasLights.getAmountLit()).toBe(1e6);
    });

    it('has 1000 lights lit if you turn on the first row', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_FIRST_ROW);

      expect(christmasLights.getAmountLit()).toBe(1e3);
    });

    it('has 2000 lights lit if you turn on the first and the second row', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_SECOND_ROW);

      expect(christmasLights.getAmountLit()).toBe(2e3);
    });

    it('has 1000 lights lit if you turn on the second row', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_SECOND_ROW, END_OF_SECOND_ROW);

      expect(christmasLights.getAmountLit()).toBe(1e3);
    });

    it('has 1000 lights lit if you turn on the first column', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_FIRST_COLUMN, END_OF_FIRST_COLUMN);

      expect(christmasLights.getAmountLit()).toBe(1e3);
    });

    it('has 500 lights lit if you turn on the half of the first column', () => {
      const christmasLights = new ChristmasLightsV2();
      const firstHalfOfFirstColumn = { x: 0, y: 499 };

      christmasLights.turnOn(START_OF_FIRST_COLUMN, firstHalfOfFirstColumn);

      expect(christmasLights.getAmountLit()).toBe(500);
    });

    it('has 500 lights lit if you turn on the second half of the first column', () => {
      const christmasLights = new ChristmasLightsV2();
      const secondHalfOfFirstColumn = { x: 0, y: 500 };

      christmasLights.turnOn(secondHalfOfFirstColumn, END_OF_FIRST_COLUMN);

      expect(christmasLights.getAmountLit()).toBe(500);
    });

    it('has 2000 lights lit if you turn on 1000 lights and then 1000 more', () => {
      const christmasLights = new ChristmasLightsV2();
      const startOfSecondColumn = { x: 1, y: 0 };
      const endOfSecondColumn = { x: 1, y: 999 };

      christmasLights.turnOn(START_OF_FIRST_COLUMN, END_OF_FIRST_COLUMN);
      christmasLights.turnOn(startOfSecondColumn, endOfSecondColumn);

      expect(christmasLights.getAmountLit()).toBe(2e3);
    });

    it('does not take into account when the same lights are turned on several times', () => {
      const christmasLights = new ChristmasLightsV2();
      const startOfSecondColumn = { x: 1, y: 0 };
      const endOfSecondColumn = { x: 1, y: 999 };

      christmasLights.turnOn(START_OF_FIRST_COLUMN, END_OF_FIRST_COLUMN);
      christmasLights.turnOn(START_OF_FIRST_COLUMN, END_OF_FIRST_COLUMN);

      christmasLights.turnOn(startOfSecondColumn, endOfSecondColumn);
      christmasLights.turnOn(startOfSecondColumn, endOfSecondColumn);

      expect(christmasLights.getAmountLit()).toBe(2e3);
    });

    it('turn on just the lights that are off turning in an area that is already partially on', () => {
      const christmasLights = new ChristmasLightsV2();
      const middleOfFirstRow = { x: 500, y: 0 };

      christmasLights.turnOn(START_OF_FIRST_ROW, middleOfFirstRow);
      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_FIRST_ROW);

      expect(christmasLights.getAmountLit()).toBe(1000);
    });
  });

  describe('turn off', () => {
    it('does not have any light lit if you turn off all', () => {
      const christmasLights = new ChristmasLightsV2();
      const topLeftCorner = { x: 0, y: 0 };
      const bottomRightCorner = { x: 999, y: 999 };

      christmasLights.turnOn(topLeftCorner, bottomRightCorner);
      christmasLights.turnOff(topLeftCorner, bottomRightCorner);

      expect(christmasLights.getAmountLit()).toBe(0);
    });

    it('has 500 lights lit if you turn on 1000 lights and then turn off 500 of them', () => {
      const christmasLights = new ChristmasLightsV2();
      const middleOfFirstRow = { x: 500, y: 0 };

      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_FIRST_ROW);
      christmasLights.turnOff(middleOfFirstRow, END_OF_FIRST_ROW);

      expect(christmasLights.getAmountLit()).toBe(500);
    });

    it('does nothing when turnning off lights that are not lit', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_FIRST_ROW);
      christmasLights.turnOff(START_OF_SECOND_ROW, END_OF_SECOND_ROW);

      expect(christmasLights.getAmountLit()).toBe(1000);
    });
  });

  describe('toggle', () => {
    it('toggles from on to off', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_FIRST_ROW);
      christmasLights.toggle(START_OF_FIRST_ROW, END_OF_FIRST_ROW);

      expect(christmasLights.getAmountLit()).toBe(0);
    });

    it('toggles from off to on', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.toggle(START_OF_FIRST_ROW, END_OF_FIRST_ROW);

      expect(christmasLights.getAmountLit()).toBe(1000);
    });

    it('toggles a mix of lights that are off and on', () => {
      const christmasLights = new ChristmasLightsV2();

      christmasLights.turnOn(START_OF_FIRST_ROW, END_OF_FIRST_ROW);
      christmasLights.toggle(START_OF_FIRST_ROW, END_OF_SECOND_ROW);

      expect(christmasLights.getAmountLit()).toBe(1000);
    });
  });
});