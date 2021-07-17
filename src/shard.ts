import PartyMember from './party';
import Event from './event';
import { TileGrid } from './map';

export default class Shard {
  id: string;
  partyList: PartyMember[];
  map: TileGrid;
  gamelog: Event[];

  constructor() {
    this.id = 'universal';
    this.partyList = [];
    this.map = new TileGrid();
    this.gamelog = [];
  }
}

export class SimpleShardData {
  id: string;
  partyList: PartyMember[];
  map: TileGrid;
  gamelog: Event[];

  constructor(shard?: Shard) {
    this.id = shard?.id || 'universal';
    this.partyList = shard?.partyList || [];
    this.map = shard?.map || new TileGrid();
    this.gamelog = shard?.gamelog || [];
  }
}
