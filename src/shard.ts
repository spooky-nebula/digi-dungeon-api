import PartyMember from './party';
import Event from './event';
import { TileGrid } from './map';

interface Shard {
  id: string;
  partyList: PartyMember[];
  map: TileGrid;
  gamelog: Event[];
}

class Shard {
  constructor() {
    this.id = 'universal';
    this.partyList = [];
    this.map = new TileGrid();
    this.gamelog = [];
  }
}

export default Shard;
export { Shard };

interface SimpleShardData {
  id: string;
  partyList: PartyMember[];
  map: TileGrid;
  gamelog: Event[];
}

class SimpleShardData {
  constructor(shard?: Shard) {
    this.id = shard?.id || 'universal';
    this.partyList = shard?.partyList || [];
    this.map = shard?.map || new TileGrid();
    this.gamelog = shard?.gamelog || [];
  }
}

export { SimpleShardData };
