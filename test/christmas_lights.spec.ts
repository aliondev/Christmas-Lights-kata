import { ChristmasLights } from '../src/christmas_lights';

describe('Christmas lights kata', () => {
  it('has all the lights off initially', () => {
    const christmasLights = new ChristmasLights();

    expect(christmasLights.getAmountLit()).toBe(0);
  });
});