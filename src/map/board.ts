import { Vector2 } from '../util/structs';
import { HexGrid, Hex } from '.';
import { Entity, ObjectEntity } from './entity';

interface Board {
  grid: HexGrid<Hex<Vector2>>;
  entityList: Entity[];
  objectList: ObjectEntity[];
}

export default Board;
export { Board };
