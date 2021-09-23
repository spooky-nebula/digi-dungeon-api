import { cubicToAxial } from '../util/math/hexagonal';
import { Vector2, Vector3 } from '../util/structs';

interface Hex<T> {
  position: T;
  height: number;
  movecost?: number;
}

/**
 * Hexgons lol
 */
class Hex<T> {
  constructor(position: T, height: number = 0, movecost: number = 1) {
    this.position = position;
    this.height = height;
    this.movecost = movecost;
  }
}

interface HexGrid<T extends Hex<Vector2>> {
  hex: T[];
}

/**
 * Collection of Hexagons for a map
 */
class HexGrid<T extends Hex<Vector2>> {
  /**
   * Initializes all the necessary components of an HexGrid
   * @param initialGrid You can use an Importer or Generator for this!
   * @returns
   */
  constructor(initialGrid: T[] = []) {
    this.hex = initialGrid;
  }

  /**
   * Searches for an Hex with the given coordinates
   * @param q alias for x
   * @param r alias for z
   * @returns Can return undefined if the hex is not found with that position
   */
  get(q: number, r: number): T | undefined {
    return this.hex.find((hex) => hex.position.x == q && hex.position.y == r);
  }

  /**
   * Searches for an Hex with the given coordinates
   * @returns Can return undefined if the hex is not found with that position
   */
  getCubic(x: number, y: number, z: number): T | undefined {
    let position = cubicToAxial({ x: x, y: y, z: z });
    return this.get(position.x, position.y);
  }

  /**
   * Sets the value of an Hex with the given coordinates
   * @param q alias for x
   * @param r alias for z
   * @returns Can return undefined if the hex is not found with that position
   */
  set(q: number, r: number, newValue: T): T | undefined {
    let hexindex = this.hex.findIndex(
      (hex) => hex.position.x == q && hex.position.y == r
    );
    if (hexindex > -1) {
      this.hex[hexindex] = newValue;
      return this.hex[hexindex];
    }
    return undefined;
  }

  /**
   * Sets the value of an Hex with the given coordinates
   * @returns Can return undefined if the hex is not found with that position
   */
  setCubic(x: number, y: number, z: number, newValue: T): T | undefined {
    let position = cubicToAxial({ x: x, y: y, z: z });
    return this.set(position.x, position.y, newValue);
  }
}

export default HexGrid;
export { Hex, HexGrid };
