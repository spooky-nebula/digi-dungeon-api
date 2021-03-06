import { Vector2, Vector3 } from '../structs';
import { vector2lerp, vector2round, vector3lerp, vector3round } from './basic';

//#region Coordinate Maths

//#region Converting Coordinate Systems

/**
 * Converts a cubic coordinate into an axial coordinate.
 * This is for hexagon-based maps
 * @param vector Cubic Coordinates
 * @returns Axial Coordinates
 */
function cubicToAxial(vector: Vector3): Vector2 {
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
function axialToCubic(vector: Vector2): Vector3 {
  // x + y + z = 0 <=>
  // y = - x - z
  let x = vector.x;
  let z = vector.y;
  let y = -x - z;
  return { x: x, y: y, z: z };
}

export { cubicToAxial, axialToCubic };

//#endregion

//#region Cubic Coordinate Maths

/** Standard cubic directions */
type CubicDirection =
  | { x: 1; y: -1; z: 0 }
  | { x: 1; y: 0; z: -1 }
  | { x: 0; y: 1; z: -1 }
  | { x: -1; y: 1; z: 0 }
  | { x: -1; y: 0; z: 1 }
  | { x: 0; y: -1; z: 1 };

/** List of all Directions */
const CubicDirectionList = [
  { x: 1, y: -1, z: 0 },
  { x: 1, y: 0, z: -1 },
  { x: 0, y: 1, z: -1 },
  { x: -1, y: 1, z: 0 },
  { x: -1, y: 0, z: 1 },
  { x: 0, y: -1, z: 1 }
] as CubicDirection[];

/** Ease of access object */
const CubicDirectionsPointy = {
  east: CubicDirectionList[0],
  northeast: CubicDirectionList[1],
  northwest: CubicDirectionList[2],
  west: CubicDirectionList[3],
  southwest: CubicDirectionList[4],
  southeast: CubicDirectionList[5]
};

/** Ease of access object */
const CubicDirectionsFlat = {
  southeast: CubicDirectionList[0],
  northeast: CubicDirectionList[1],
  north: CubicDirectionList[2],
  northwest: CubicDirectionList[3],
  southwest: CubicDirectionList[4],
  south: CubicDirectionList[5]
};

/**
 * Returns the neighboring cubic coordinate in the direction given
 * @param vector Origin Coordinate
 * @param direction Directon Vector
 * @returns Neighbor Coordinate
 */
function cubicNeighbor(vector: Vector3, direction: CubicDirection): Vector3 {
  return cubicAdd(vector, direction);
}

/**
 * Adds a vector to a origin coordinate
 * @param vector1 Origin Coordinate
 * @param vector2 Vector to add
 * @returns Resulting Coordinate
 */
function cubicAdd(vector1: Vector3, vector2: Vector3): Vector3 {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y,
    z: vector1.z + vector2.z
  };
}

/**
 * Subtracts a vector from an origin coordinate
 * @param vector1 Origin Coordinate
 * @param vector2 Vector to subtract
 * @returns Resulting Coordinate
 */
function cubicSubtract(vector1: Vector3, vector2: Vector3): Vector3 {
  return {
    x: vector1.x - vector2.x,
    y: vector1.y - vector2.y,
    z: vector1.z - vector2.z
  };
}

/**
 * Multiplies the origin coordinate by the vector given
 * @param vector1 Origin Coordinate
 * @param vector2 Vector to multiply by
 * @returns Resulting Coordinate
 */
function cubicMultiply(vector1: Vector3, vector2: Vector3): Vector3 {
  return {
    x: vector1.x * vector2.x,
    y: vector1.y * vector2.y,
    z: vector1.z * vector2.z
  };
}

/**
 * Returns an array of adjecent coordinates
 * @param vector Origin Coordinate
 * @returns Array of all the neighboring coordinates
 */
function cubicNeighbors(vector: Vector3): Vector3[] {
  let result: Vector3[] = new Array<Vector3>(CubicDirectionList.length);
  CubicDirectionList.forEach((direction, index) => {
    result[index] = cubicNeighbor(vector, direction);
  });
  return result;
}

/** Standard diagonal coordinates */
type CubicDiagonal =
  | { x: 2; y: -1; z: -1 }
  | { x: 1; y: 1; z: -2 }
  | { x: -1; y: 2; z: -1 }
  | { x: -2; y: 1; z: 1 }
  | { x: -1; y: -1; z: 2 }
  | { x: 1; y: -2; z: 1 };

/** List of all diagonals */
const CubicDiagonalList = [
  { x: 2, y: -1, z: -1 },
  { x: 1, y: 1, z: -2 },
  { x: -1, y: 2, z: -1 },
  { x: -2, y: 1, z: 1 },
  { x: -1, y: -1, z: 2 },
  { x: 1, y: -2, z: 1 }
] as CubicDiagonal[];

/** Ease of access object */
const CubicDiagonalsPointy = {
  northeast: CubicDiagonalList[0],
  northwest: CubicDiagonalList[1],
  west: CubicDiagonalList[2],
  southwest: CubicDiagonalList[3],
  southeast: CubicDiagonalList[4],
  east: CubicDiagonalList[5]
};

/** Ease of access object */
const CubicDiagonalsFlat = {
  east: CubicDiagonalList[0],
  northeast: CubicDiagonalList[1],
  northwest: CubicDiagonalList[2],
  west: CubicDiagonalList[3],
  southwest: CubicDiagonalList[4],
  southeast: CubicDiagonalList[5]
};

/**
 * Returns the diagonal coordinate from the origin
 * @param vector Origin Coordinate
 * @param direction Diagonal direction
 * @returns Diagonal Coordinate
 */
function cubicDiagonal(vector: Vector3, direction: CubicDiagonal): Vector3 {
  return cubicAdd(vector, direction);
}

/**
 * Returns all the diagonals from the origin
 * @param vector Origin Coordinate
 * @returns Array of Diagonals
 */
function cubicDiagonals(vector: Vector3): Vector3[] {
  let result: Vector3[] = new Array<Vector3>(CubicDiagonalList.length);
  CubicDiagonalList.forEach((diagonal, index) => {
    result[index] = cubicDiagonal(vector, diagonal);
  });
  return result;
}

/**
 * Calculates the distance between the origin and destination coordinates
 * @param vector1 Origin Coordinate
 * @param vector2 Destination Coordinate
 * @returns Resulting Distance
 */
function cubicDistance(vector1: Vector3, vector2: Vector3): number {
  return Math.max(
    Math.abs(vector1.x - vector2.x),
    Math.abs(vector1.y - vector2.y),
    Math.abs(vector1.z - vector2.z)
  );
}

/**
 * Calculates the vectors that would compose a line between two vectors,
 * Includes the orign and destination
 * @param vector1 Origin Coordinate
 * @param vector2 Destination Coordinate
 * @returns Array of Vectors
 */
function cubicLine(vector1: Vector3, vector2: Vector3): Vector3[] {
  let distance = cubicDistance(vector1, vector2);
  let result: Vector3[] = new Array(distance);
  for (let i = 0; i <= distance; i++) {
    result[i] = vector3round(vector3lerp(vector1, vector2, (1 / distance) * i));
  }
  return result;
}

/**
 * Calculates the vectors in range of the orign
 * @param origin Origin Coordinate
 * @param radius Range
 * @returns
 */
function cubicRange(origin: Vector3, radius: number): Vector3[] {
  let result = new Array<Vector3>();
  // Maths lol, figure it out
  //for (let x = -radius; -radius <= x && x <= radius; x++) {
  //  let miny = Math.max(-radius, -x - radius);
  //  let maxy = Math.max(radius, -x + radius);
  //  for (let y = miny; miny <= y && y <= maxy; y++) {
  //    let position = cubicAdd(origin, { x: x, y: -x - y, z: y });
  //    result.push(position);
  //  }
  //}
  for (let x = -radius; -radius <= x && x <= radius; x++) {
    for (let y = -radius; -radius <= y && y <= radius; y++) {
      for (let z = -radius; -radius <= z && z <= radius; z++) {
        if (x + y + z == 0) {
          let position = cubicAdd(origin, { x: x, y: y, z: z });
          result.push(position);
        }
      }
    }
  }
  return result;
}

export {
  // Types
  CubicDirection,
  CubicDirectionList,
  CubicDirectionsPointy,
  CubicDirectionsFlat,
  CubicDiagonal,
  CubicDiagonalList,
  CubicDiagonalsPointy,
  CubicDiagonalsFlat,
  // Functions
  cubicAdd,
  cubicSubtract,
  cubicMultiply,
  cubicNeighbor,
  cubicNeighbors,
  cubicDiagonal,
  cubicDiagonals,
  cubicDistance,
  cubicLine,
  cubicRange
};

//#endregion

//#region Axial Coordinate Maths

/** Standard axial directions */
type AxialDirection =
  | { x: 1; y: 0 }
  | { x: 1; y: -1 }
  | { x: 0; y: -1 }
  | { x: -1; y: 0 }
  | { x: -1; y: 1 }
  | { x: 0; y: 1 };

/** List of all Directions */
const AxialDirectionList = [
  { x: 1, y: 0 },
  { x: 1, y: -1 },
  { x: 0, y: -1 },
  { x: -1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: 1 }
] as AxialDirection[];

/** Ease of access object */
const AxialDirectionsPointy = {
  east: AxialDirectionList[0],
  northeast: AxialDirectionList[1],
  northwest: AxialDirectionList[2],
  west: AxialDirectionList[3],
  southwest: AxialDirectionList[4],
  southeast: AxialDirectionList[5]
};

/** Ease of access object */
const AxialDirectionsFlat = {
  southeast: AxialDirectionList[0],
  northeast: AxialDirectionList[1],
  north: AxialDirectionList[2],
  northwest: AxialDirectionList[3],
  southwest: AxialDirectionList[4],
  south: AxialDirectionList[5]
};

/**
 * Returns the neighboring cubic coordinate in the direction given
 * @param vector Origin Coordinate
 * @param direction Directon Vector
 * @returns Neighbor Coordinate
 */
function axialNeighbor(vector: Vector2, direction: AxialDirection): Vector2 {
  return axialAdd(vector, direction);
}

/**
 * Adds a vector to an origin coordinate
 * @param vector1 Origin Coordinate
 * @param vector2 Vector to add
 * @returns Resulting Coordinate
 */
function axialAdd(vector1: Vector2, vector2: Vector2): Vector2 {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y
  };
}

/**
 * Subtracts a vector from an origin coordinate
 * @param vector1 Origin Coordinate
 * @param vector2 Vector to subtract
 * @returns Resulting Coordinate
 */
function axialSubtract(vector1: Vector2, vector2: Vector2): Vector2 {
  return {
    x: vector1.x - vector2.x,
    y: vector1.y - vector2.y
  };
}

/**
 * Multiplies the origin coordinate by the vector given
 * @param vector1 Origin Coordinate
 * @param vector2 Vector to multiply by
 * @returns Resulting Coordinate
 */
function axialMultiply(vector1: Vector2, vector2: Vector2): Vector2 {
  return {
    x: vector1.x * vector2.x,
    y: vector1.y * vector2.y
  };
}

/**
 * Returns an array of adjecent coordinates
 * @param vector Origin Coordinate
 * @returns Array of all the neighboring coordinates
 */
function axialNeighbors(vector: Vector2): Vector2[] {
  let result: Vector2[] = new Array<Vector2>(AxialDirectionList.length);
  AxialDirectionList.forEach((direction, index) => {
    result[index] = axialNeighbor(vector, direction);
  });
  return result;
}

/** Standard diagonal coordinates */
type AxialDiagonal =
  | { x: 2; y: -1 }
  | { x: 1; y: -2 }
  | { x: -1; y: -1 }
  | { x: -2; y: 1 }
  | { x: -1; y: 2 }
  | { x: 1; y: 1 };

/** List of all diagonals */
const AxialDiagonalList = [
  { x: 2, y: -1 },
  { x: 1, y: -2 },
  { x: -1, y: -1 },
  { x: -2, y: 1 },
  { x: -1, y: 2 },
  { x: 1, y: 1 }
] as AxialDiagonal[];

/** Ease of access object */
const AxialDiagonalsPointy = {
  northeast: AxialDiagonalList[0],
  north: AxialDiagonalList[1],
  northwest: AxialDiagonalList[2],
  southwest: AxialDiagonalList[3],
  south: AxialDiagonalList[4],
  southeast: AxialDiagonalList[5]
};

/** Ease of access object */
const AxialDiagonalsFlat = {
  east: AxialDiagonalList[0],
  northeast: AxialDiagonalList[1],
  northwest: AxialDiagonalList[2],
  west: AxialDiagonalList[3],
  southwest: AxialDiagonalList[4],
  southeast: AxialDiagonalList[5]
};

/**
 * Returns the diagonal coordinate from the origin
 * @param vector Origin Coordinate
 * @param direction Diagonal direction
 * @returns Diagonal Coordinate
 */
function axialDiagonal(vector: Vector2, direction: AxialDiagonal): Vector2 {
  return axialAdd(vector, direction);
}

/**
 * Returns all the diagonals from the origin
 * @param vector Origin Coordinate
 * @returns Array of Diagonals
 */
function axialDiagonals(vector: Vector2): Vector2[] {
  let result: Vector2[] = new Array<Vector2>(AxialDiagonalList.length);
  AxialDiagonalList.forEach((diagonal, index) => {
    result[index] = axialDiagonal(vector, diagonal);
  });
  return result;
}

/**
 * Calculates the distance between the origin and destination coordinates
 * @param vector1 Origin Coordinate
 * @param vector2 Destination Coordinate
 * @returns Resulting Distance
 */
function axialDistance(vector1: Vector2, vector2: Vector2): number {
  let vector1c = axialToCubic(vector1);
  let vector2c = axialToCubic(vector2);
  return cubicDistance(vector1c, vector2c);
}

/**
 * Calculates the vectors that would compose a line between two vectors,
 * Includes the orign and destination
 * @param vector1 Origin Coordinate
 * @param vector2 Destination Coordinate
 * @returns Array of Vectors
 */
function axialLine(vector1: Vector2, vector2: Vector2): Vector2[] {
  let distance = axialDistance(vector1, vector2);
  let result: Vector2[] = new Array(distance);
  for (let i = 0; i <= distance; i++) {
    result[i] = vector2round(vector2lerp(vector1, vector2, (1 / distance) * i));
  }
  return result;
}

/**
 * Calculates the vectors in range of the orign
 * @param origin Origin Coordinate
 * @param radius Range
 * @returns
 */
function axialRange(origin: Vector2, radius: number): Vector2[] {
  let result = new Array<Vector2>();
  //// Maths lol, figure it out
  for (let r = -radius; -radius <= r && r <= radius; r++) {
    let minq = Math.max(-radius, -r - radius);
    let maxq = Math.min(+radius, -r + radius);
    for (let q = minq; minq <= q && q <= maxq; q++) {
      let position = axialAdd(origin, { x: q, y: r });
      result.push(position);
    }
  }
  return result;
}

export {
  // Types
  AxialDirection,
  AxialDirectionList,
  AxialDirectionsPointy,
  AxialDirectionsFlat,
  AxialDiagonal,
  AxialDiagonalList,
  AxialDiagonalsPointy,
  AxialDiagonalsFlat,
  // Functions
  axialNeighbor,
  axialAdd,
  axialSubtract,
  axialMultiply,
  axialNeighbors,
  axialDiagonal,
  axialDiagonals,
  axialDistance,
  axialLine,
  axialRange
};

//#endregion

//#endregion
