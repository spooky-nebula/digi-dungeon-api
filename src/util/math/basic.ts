import { Vector2, Vector3 } from './../structs';

/***
 * Returns true if the number given is odd, false otherwise.
 *
 * When given a float, double or any decimal number, the method used is the
 * modulo `%2` method.
 *
 * When given an interger, bit manipulation will be used instead.
 * @returns boolean
 */
function isOdd(n: number): boolean {
  if (Number.isInteger(n)) {
    return n % 2 == 1;
  }
  return (n | 1) == n;
}

/**
 * Removes duplicates from array
 * @param array Source
 * @returns
 */
function removeDuplicates(array: any[]): any[] {
  let blackMagicSet = [...new Set(array)];
  return blackMagicSet;
}

/**
 * Calculates linear interpolation between a and b
 * @param a Origin
 * @param b Destination
 * @param t Point
 * @returns
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * @augments lerp
 */
function vector3lerp(a: Vector3, b: Vector3, t: number): Vector3 {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), z: lerp(a.z, b.z, t) };
}

/**
 * Rounds out a vector's coordinates
 * @param vector
 * @returns
 */
function vector3round(vector: Vector3): Vector3 {
  return {
    x: Math.round(vector.x),
    y: Math.round(vector.y),
    z: Math.round(vector.z)
  };
}

/**
 * @augments lerp
 */
function vector2lerp(a: Vector2, b: Vector2, t: number): Vector2 {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
}

/**
 * Rounds out a vector's coordinates
 * @param vector
 * @returns
 */
function vector2round(vector: Vector2): Vector2 {
  return {
    x: Math.round(vector.x),
    y: Math.round(vector.y)
  };
}

export { isOdd, lerp, vector3lerp, vector3round, vector2lerp, vector2round };
