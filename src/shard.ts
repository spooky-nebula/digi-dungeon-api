import PartyMember from './party';
import Event from './event';
import { Board, Hex, HexGrid } from './map';
import { Vector2 } from './util/structs';

interface Shard {
  id: string;
  partyList: PartyMember[];
  map: Board;
  gamelog: Event[];
}

class Shard {
  constructor() {
    this.id = 'universal';
    this.partyList = [];
    this.map = new Board();
    this.gamelog = [];
  }
}

export default Shard;
export { Shard };

interface SimpleShardData {
  id: string;
  partyList: PartyMember[];
  map: Board;
  gamelog: Event[];
}

class SimpleShardData {
  constructor(shard?: Shard) {
    this.id = shard?.id || 'universal';
    this.partyList = shard?.partyList || [];
    this.map = shard?.map || new Board();
    this.gamelog = shard?.gamelog || [];
  }
}

export { SimpleShardData };
