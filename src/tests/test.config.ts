import { rhombusGeneratorTest } from './hexgrid.test';
import { axialToCubicTest, cubicToAxialTest } from './math.test';
import { diceRollTest, sheetCreateTest } from './sheet.test';

const config = {
  tests: [
    diceRollTest,
    sheetCreateTest,
    rhombusGeneratorTest,
    cubicToAxialTest,
    axialToCubicTest
  ] as TestFunction[]
};

export default config;
