import { Vector3 } from '../util/structs';

interface Tile {
  pos: Vector3;
  height: number;
  type: TileType;
}

/** @deprecated Replaced with Hex<T> */
class Tile {
  constructor(
    pos: Vector3 = { x: 0, y: 0, z: 0 },
    height: number = 0,
    type: TileType = TileType.Grass
  ) {
    this.pos = pos;
    this.height = height;
    this.type = type;
  }
}

export default Tile;
export { Tile };

/** @deprecated Replaced with HexType */
enum TileType {
  Grass = 1,
  Cobble = 2,
  Gravel = 3,
  Brick = 4,
  Stone = 5
}

export { TileType };
