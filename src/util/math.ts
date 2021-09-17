import { Vector2, Vector3 } from './structs';

/***
 * Returns true if the number given is odd, false otherwise.
 *
 * When given a float, double or any decimal number, the method used is the
 * modulo `%2` method.
 *
 * When given an interger, bit manipulation will be used instead.
 * @returns boolean
 */
export function isOdd(n: number): boolean {
  if (Number.isInteger(n)) {
    return n % 2 == 1;
  }
  return (n | 1) == n;
}

/**
 * Converts a cubic coordinate into an axial coordinate.
 * This is for hexagon-based maps
 * @param vector Cubic Coordinates
 * @returns Axial Coordinates
 */
export function cubic_to_axial(vector: Vector3): Vector2 {
  let q = vector.x;
  let r = vector.z;
  return { x: q, y: r };
}

/**
 * Converts axial coordinate into a cubic coordinate.
 * This is for hexagon-based maps
 * @param vector Axial Coordinates
 * @returns Cubic Coordinates
 */
export function axial_to_cubic(vector: Vector2): Vector3 {
  let x = vector.x;
  let z = vector.y;
  let y = -x - z;
  return { x: x, y: y, z: z };
}
