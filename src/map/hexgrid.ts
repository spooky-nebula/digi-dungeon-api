interface Hex<T> {
  position: T;
  height: number;
}

/**
 * Hexgons lol
 */
class Hex<T> {
  constructor(position: T, height: number = 0) {
    this.position = position;
    this.height = height;
  }
}

interface HexGrid<T> {
  hex: Hex<T>[];
}

/**
 * Collection of Hexagons for a map
 */
class HexGrid<T> {
  /**
   * Initializes all the necessary components of an HexGrid
   * @param initialGrid You can use an Importer or Generator for this!
   * @returns
   */
  constructor(initialGrid: Hex<T>[] = []) {
    this.hex = initialGrid;
  }
}

export default HexGrid;
export { Hex, HexGrid };
