import { rhombusGeneratorTest } from './hexgrid.test';
import {
  axialToCubicTest,
  cubicToAxialTest,
  lineDrawingTest,
  rangeTest
} from './math.test';
import { diceRollTest, sheetCreateTest } from './sheet.test';

const config = {
  tests: [
    // Events
    diceRollTest,
    // Sheets
    sheetCreateTest,
    // Generator and importers
    rhombusGeneratorTest,
    // Hexagonal Maths
    cubicToAxialTest,
    axialToCubicTest,
    lineDrawingTest,
    rangeTest
  ] as TestFunction[]
};

export default config;
