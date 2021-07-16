import PartyMember from './party';
import Event from './event';
import { TileGrid } from './map';

export default class Shard {
  id: string;
  partyList: PartyMember[];
  map: TileGrid;
  gamelog: Event[];
  getSimpleData(): SimpleShardData {
    let data = new SimpleShardData();
    data.gamelog = this.gamelog;
    data.map = this.map;
    data.partyList = this.partyList;
    return data;
  }

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

  constructor() {
    this.id = 'universal';
    this.partyList = [];
    this.map = new TileGrid();
    this.gamelog = [];
  }
}
