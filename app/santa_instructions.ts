import { ChristmasLights } from '../src/christmas_lights';

(function() {
  const christmasLights = new ChristmasLights();

  christmasLights.turnOn({ x: 887, y: 9 }, { x: 959, y: 629 });

  christmasLights.turnOn({ x: 454, y: 398 }, { x: 844, y: 448 });

  christmasLights.turnOff({ x: 539, y: 243 }, { x: 559, y: 965 });

  christmasLights.turnOff({ x: 370, y: 819 }, { x: 676, y: 868 });

  christmasLights.turnOff({ x: 145, y: 40 }, { x: 370, y: 997 });

  christmasLights.turnOff({ x: 301, y: 3 }, { x: 808, y: 453 });

  christmasLights.turnOn({ x: 351, y: 678 }, { x: 951, y: 908 });

  christmasLights.toggle({ x: 720, y: 196 }, { x: 897, y: 994 });

  christmasLights.toggle({ x: 831, y: 394 }, { x: 904, y: 860 });

  console.log(
    `After following Santa\'s instructions ${christmasLights.getAmountLit()} lights are lit`,
  );
})();
