import { Vector2 } from '../util/structs';
import { HexGrid, Hex } from '.';
import { Entity, ObjectEntity } from './entity';
import { generateHexagon, generateRhombus } from './generators';

interface Board {
  grid: HexGrid<Hex<Vector2>>;
  entityList: Entity[];
  objectList: ObjectEntity[];
}

class Board {
  constructor() {
    this.grid = new HexGrid(generateRhombus(3, 3));
    this.entityList = [];
    this.objectList = [];
  }
}

export default Board;
export { Board };
