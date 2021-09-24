import { Hex, HexGrid } from '../map';
import { generateRhombus } from '../map/generators';
import {
  axialLine,
  axialRange,
  axialToCubic,
  cubicLine,
  cubicRange,
  cubicToAxial
} from '../util/math/hexagonal';
import { Vector2, Vector3 } from '../util/structs';
import {
  arraysAreEqual,
  createBoolTable,
  drawBoolTableInConsole,
  objectsAreEqual
} from './test.utils';

export function axialToCubicTest(): TestResult {
  let testVectors: Vector2[] = [
    { x: -2, y: 2 },
    { x: 2, y: 0 },
    { x: 1, y: -2 }
  ];

  let expectedVectors: Vector3[] = [
    { x: -2, y: 0, z: 2 },
    { x: 2, y: -2, z: 0 },
    { x: 1, y: 1, z: -2 }
  ];

  for (let i = 0; i < testVectors.length; i++) {
    const vector = testVectors[i];
    const expectation = expectedVectors[i];

    let result = axialToCubic(vector);
    if (!objectsAreEqual(result, expectation)) {
      return {
        success: false,
        message:
          '\naxialToCubicTest\n Vector was not converted from axial to cubic correctly'
      };
    }
  }

  return { success: true };
}

export function cubicToAxialTest(): TestResult {
  let testVectors: Vector3[] = [
    { x: -2, y: 0, z: 2 },
    { x: 2, y: -2, z: 0 },
    { x: 1, y: 1, z: -2 }
  ];

  let expectedVectors: Vector2[] = [
    { x: -2, y: 2 },
    { x: 2, y: 0 },
    { x: 1, y: -2 }
  ];

  for (let i = 0; i < testVectors.length; i++) {
    const vector = testVectors[i];
    const expectation = expectedVectors[i];

    let result = cubicToAxial(vector);
    if (!objectsAreEqual(result, expectation)) {
      return {
        success: false,
        message:
          '\ncubicToAxialTest\n Vector was not converted from cubic to axial correctly'
      };
    }
  }

  return { success: true };
}

export function lineDrawingTest(): TestResult {
  // AXIAL ROW
  // Select 2 hex in the same row
  let hex1: Hex<Vector2> = new Hex<Vector2>({ x: 0, y: -2 });
  let hex2: Hex<Vector2> = new Hex<Vector2>({ x: 2, y: -2 });
  // Draw line
  let resultLine1: Vector2[] = axialLine(hex1.position, hex2.position);
  let expectedHexInLine1: Hex<Vector2> = new Hex<Vector2>({ x: 1, y: -2 });
  // Throw if the expectation doesn't meet reality :(
  if (!objectsAreEqual(resultLine1[1], expectedHexInLine1.position)) {
    return {
      success: false,
      message:
        "\nlineDrawingTest\n Result line doesn' include expected hex in AXIAL ROW line drawing"
    };
  }
  // CUBIC COLUMN
  // Select 2 hex in the same column
  let hex3: Hex<Vector3> = new Hex<Vector3>({ x: -2, y: 2, z: 0 });
  let hex4: Hex<Vector3> = new Hex<Vector3>({ x: -2, y: 0, z: 2 });
  // Draw line
  let resultLine2: Vector3[] = cubicLine(hex3.position, hex4.position);
  let expectedHexInLine2: Hex<Vector3> = new Hex<Vector3>({
    x: -2,
    y: 1,
    z: 1
  });
  // Throw if the expectation doesn't meet reality :(
  if (!objectsAreEqual(resultLine2[1], expectedHexInLine2.position)) {
    return {
      success: false,
      message:
        "\nlineDrawingTest\n Result line doesn' include expected hex in CUBIC COLUMN line drawing"
    };
  }
  // AXIAL ACROSS
  // Select 2 hex in different positions
  let hex5: Hex<Vector2> = new Hex<Vector2>({ x: 2, y: -2 });
  let hex6: Hex<Vector2> = new Hex<Vector2>({ x: 0, y: 2 });
  // Draw line
  let resultLine3: Vector2[] = axialLine(hex5.position, hex6.position);
  let expectedVectorsInLine1: Vector2[] = [
    { x: 2, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 }
  ];
  // Throw if the expectation doesn't meet reality :(
  if (
    !(
      objectsAreEqual(resultLine3[1], expectedVectorsInLine1[0]) &&
      objectsAreEqual(resultLine3[2], expectedVectorsInLine1[1]) &&
      objectsAreEqual(resultLine3[3], expectedVectorsInLine1[2])
    )
  ) {
    return {
      success: false,
      message:
        "\nlineDrawingTest\n Result line doesn' include expected hex in AXIAL ACROSS line drawing"
    };
  }

  return { success: true };
}

export function rangeTest(): TestResult {
  // AXIAL RANGE
  // Centre of range
  let originHex1: Hex<Vector2> = new Hex<Vector2>({ x: 0, y: 0 });
  let result1 = axialRange(originHex1.position, 2);
  // Convert to boolean table for easier lookup
  let table1 = createBoolTable(result1);
  let expectation1 = [
    [false, false, true, true, true],
    [false, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, false],
    [true, true, true, false, false]
  ];
  if (!arraysAreEqual(table1, expectation1)) {
    return {
      success: false,
      message:
        "\nrangeTest\n Resulting range doesn't match expected result in AXIAL RANGE"
    };
  }
  // CUBIC RANGE
  // Centre of range
  let originHex2: Hex<Vector3> = new Hex<Vector3>({ x: 0, y: 0, z: 0 });
  let result2 = cubicRange(originHex2.position, 2);
  // Cubic array to Axial with map
  let result2a = result2.map((element) => {
    return cubicToAxial(element);
  });
  // Convert to boolean table for easier lookup
  let table2 = createBoolTable(result2a);
  let expectation2 = [
    [false, false, true, true, true],
    [false, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, false],
    [true, true, true, false, false]
  ];
  if (!arraysAreEqual(table2, expectation2)) {
    return {
      success: false,
      message:
        "\nrangeTest\n Resulting range doesn't match expected result in CUBIC RANGE"
    };
  }

  return { success: true };
}
