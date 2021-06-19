import PartyMember from "./party";
import Event from "./event";
import { TileGrid } from "./map";

export default class Shard {
    partyList: PartyMember[];
    map: TileGrid;
    gamelog: Event[];
    getSimpleData(): SimpleShardData{
        let data = new SimpleShardData();
        data.gamelog = this.gamelog;
        data.map = this.map;
        data.partyList = this.partyList;
        return data;
    }

    constructor() {
        this.partyList = [];
        this.map = new TileGrid();
        this.gamelog = [];
    }
}

export class SimpleShardData {
    partyList: PartyMember[];
    map: TileGrid;
    gamelog: Event[];

    constructor() {
        this.partyList = [];
        this.map = new TileGrid();
        this.gamelog = [];
    }
}