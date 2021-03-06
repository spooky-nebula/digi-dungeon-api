import { generateHexagon, generateRhombus } from '../map/generators';
import { Hex, HexGrid } from '../map';
import { Vector2 } from '../util/structs';
import {
  createBoolTable,
  drawBoolTableInConsole,
  objectsAreEqual
} from './test.utils';
import { findNeighbors, pathfind } from '../util/math/hexgrid';

export function rhombusGeneratorTest(): TestResult {
  let hexGrid: Hex<Vector2>[] = generateRhombus(7, 7);

  let expectedOutput = [
    // r = 0
    { position: { x: 0, y: 0 }, height: 0 },
    { position: { x: 1, y: 0 }, height: 0 },
    { position: { x: 2, y: 0 }, height: 0 },
    { position: { x: 3, y: 0 }, height: 0 },
    { position: { x: 4, y: 0 }, height: 0 },
    { position: { x: 5, y: 0 }, height: 0 },
    { position: { x: 6, y: 0 }, height: 0 },
    // r = 1
    { position: { x: 0, y: 1 }, height: 0 },
    { position: { x: 1, y: 1 }, height: 0 },
    { position: { x: 2, y: 1 }, height: 0 },
    { position: { x: 3, y: 1 }, height: 0 },
    { position: { x: 4, y: 1 }, height: 0 },
    { position: { x: 5, y: 1 }, height: 0 },
    { position: { x: 6, y: 1 }, height: 0 },
    // r = 2
    { position: { x: 0, y: 2 }, height: 0 },
    { position: { x: 1, y: 2 }, height: 0 },
    { position: { x: 2, y: 2 }, height: 0 },
    { position: { x: 3, y: 2 }, height: 0 },
    { position: { x: 4, y: 2 }, height: 0 },
    { position: { x: 5, y: 2 }, height: 0 },
    { position: { x: 6, y: 2 }, height: 0 },
    // r = 3
    { position: { x: 0, y: 3 }, height: 0 },
    { position: { x: 1, y: 3 }, height: 0 },
    { position: { x: 2, y: 3 }, height: 0 },
    { position: { x: 3, y: 3 }, height: 0 },
    { position: { x: 4, y: 3 }, height: 0 },
    { position: { x: 5, y: 3 }, height: 0 },
    { position: { x: 6, y: 3 }, height: 0 },
    // r = 4
    { position: { x: 0, y: 4 }, height: 0 },
    { position: { x: 1, y: 4 }, height: 0 },
    { position: { x: 2, y: 4 }, height: 0 },
    { position: { x: 3, y: 4 }, height: 0 },
    { position: { x: 4, y: 4 }, height: 0 },
    { position: { x: 5, y: 4 }, height: 0 },
    { position: { x: 6, y: 4 }, height: 0 },
    // r = 5
    { position: { x: 0, y: 5 }, height: 0 },
    { position: { x: 1, y: 5 }, height: 0 },
    { position: { x: 2, y: 5 }, height: 0 },
    { position: { x: 3, y: 5 }, height: 0 },
    { position: { x: 4, y: 5 }, height: 0 },
    { position: { x: 5, y: 5 }, height: 0 },
    { position: { x: 6, y: 5 }, height: 0 },
    // r = 6
    { position: { x: 0, y: 6 }, height: 0 },
    { position: { x: 1, y: 6 }, height: 0 },
    { position: { x: 2, y: 6 }, height: 0 },
    { position: { x: 3, y: 6 }, height: 0 },
    { position: { x: 4, y: 6 }, height: 0 },
    { position: { x: 5, y: 6 }, height: 0 },
    { position: { x: 6, y: 6 }, height: 0 }
  ] as Hex<Vector2>[];

  // Check if the rhombus is the expected size
  if (hexGrid.length != expectedOutput.length) {
    return {
      success: false,
      message: '\nrhombusGeneratorTest\n Rhombus is not the correct size'
    };
  }

  // Check if the hexagon data is the same
  for (let i = 0; i < expectedOutput.length; i++) {
    const test = hexGrid[i];
    const expectation = expectedOutput[i];
    if (!objectsAreEqual(test, expectation)) {
      return {
        success: false,
        message: '\nrhombusGeneratorTest\n Rhombus is not like expected'
      };
    }
  }

  return { success: true };
}

export function pathfindTest(): TestResult {
  let hexgrid: HexGrid<Hex<Vector2>> = new HexGrid(
    generateHexagon(3, { x: 0, y: 0 })
  );

  const origin: Hex<Vector2> = hexgrid.get(0, 3) as Hex<Vector2>;
  const destination: Hex<Vector2> = hexgrid.get(-2, 0) as Hex<Vector2>;
  let pathfinded: Hex<Vector2>[] = pathfind(hexgrid, origin, destination);

  if (pathfinded.length != 6) {
    return {
      success: false,
      message: '\npathfindTest\n Pathfinded path is not the expected length'
    };
  }

  return { success: true };
}
