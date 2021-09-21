import { axialToCubic, cubicToAxial } from '../util/math/hexagonal';
import { Vector2, Vector3 } from '../util/structs';
import { objectsAreEqual } from './test.utils';

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
