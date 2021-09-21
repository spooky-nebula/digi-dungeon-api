import Tile from './tile';

interface TileGrid {
  tile: Tile[];
  width: number;
  height: number;
  seaLevel: number;
}

/** @deprecated Replaced with HexGrid<T> */
class TileGrid {
  constructor(width: number = 20, height: number = 20, seaLevel: number = 0) {
    this.tile = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.tile[x + y * width];
      }
    }

    this.width = width;
    this.height = height;
    this.seaLevel = seaLevel;
  }

  get(x: number, y: number): Tile {
    let tileIndex = x + y * this.width;
    return this.tile[tileIndex];
  }

  set(x: number, y: number, newHeight: number): void {
    let tileIndex = x + y * this.width;
    this.tile[tileIndex].height = newHeight;
  }

  getCubic(x: number, y: number, z: number): Tile {
    let col = x + (z - (z & 1)) / 2;
    let row = z;
    return this.get(col, row);
  }

  setCubic(x: number, y: number, z: number, newHeight: number): void {
    let col = x + (z - (z & 1)) / 2;
    let row = z;
    this.set(col, row, newHeight);
  }

  importHeightFromHeightMap(
    map: number[],
    width: number,
    height: number
  ): TileGrid {
    for (let i = 0; i < this.tile.length; i++) {
      this.tile[i].height = map[i];
    }
    return this;
  }

  importTypeFromHeightMap(
    map: number[],
    width: number,
    height: number
  ): TileGrid {
    for (let i = 0; i < this.tile.length; i++) {
      this.tile[i].type = map[i];
    }
    return this;
  }
}

export default TileGrid;
