import { ChristmasLightsV2 } from '../src/christmas_lights_v2';

(function () {
  const christmasLightsV2 = new ChristmasLightsV2();

  christmasLightsV2.turnOn({ x: 887, y: 9 }, { x: 959, y: 629 });

  christmasLightsV2.turnOn({ x: 454, y: 398 }, { x: 844, y: 448 });

  christmasLightsV2.turnOff({ x: 539, y: 243 }, { x: 559, y: 965 });

  christmasLightsV2.turnOff({ x: 370, y: 819 }, { x: 676, y: 868 });

  christmasLightsV2.turnOff({ x: 145, y: 40 }, { x: 370, y: 997 });

  christmasLightsV2.turnOff({ x: 301, y: 3 }, { x: 808, y: 453 });

  christmasLightsV2.turnOn({ x: 351, y: 678 }, { x: 951, y: 908 });

  christmasLightsV2.toggle({ x: 720, y: 196 }, { x: 897, y: 994 });

  christmasLightsV2.toggle({ x: 831, y: 394 }, { x: 904, y: 860 });

  console.log(
    `After following Santa\'s instructions the brightness is: ${christmasLightsV2.getBrightness()}`,
  );
})();
