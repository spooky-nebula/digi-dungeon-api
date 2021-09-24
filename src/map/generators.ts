import { axialAdd, axialRange } from '../util/math/hexagonal';
import { Vector2 } from '../util/structs';
import { Hex } from './hexgrid';

/**
 * Generates a Rhombus shaped hex array map
 * @param width
 * @param height
 * @returns
 */
function generateRhombus(width: number, height: number): Hex<Vector2>[] {
  let count = width * height;
  let result = new Array<Hex<Vector2>>(count);

  for (let r = 0; r < height; r++) {
    for (let q = 0; q < width; q++) {
      result[q + r * width] = { position: { x: q, y: r }, height: 0 };
    }
  }

  return result;
}

function generateHexagon(
  radius: number,
  centre: Vector2 = { x: radius, y: radius }
): Hex<Vector2>[] {
  let vectors = axialRange(centre, radius);
  let result = new Array<Hex<Vector2>>(vectors.length);

  vectors.map((element, index) => {
    result[index] = new Hex<Vector2>(element, 0);
  });

  return result;
}

export { generateRhombus, generateHexagon };
