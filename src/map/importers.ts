import { Vector2 } from '../util/structs';
import { Hex } from './hexgrid';

/**
 * Generates a hex grid from a given heightmap
 * @param heightmap
 * @param width
 * @param height
 * @returns
 */
function importFromHeightMap(
  heightmap: number[],
  width: number,
  height: number
): Hex<Vector2>[] {
  let count = width * height;
  let result = new Array<Hex<Vector2>>(count);

  for (let r = 0; r < height; r++) {
    for (let q = 0; q < width; q++) {
      result[q + r * width] = {
        position: { x: q, y: r },
        height: heightmap[q + r * width]
      };
    }
  }

  return result;
}

export { importFromHeightMap };
