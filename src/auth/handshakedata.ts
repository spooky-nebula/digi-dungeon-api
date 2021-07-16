import { SimpleShardData } from '../shard';

class HandshakeData {
  token: string;
  shardID: string;

  constructor(token: string, shardID: string) {
    this.token = token;
    this.shardID = shardID;
  }
}

class HandshakeResponseData {
  shardData: SimpleShardData;

  constructor(shardData: SimpleShardData) {
    this.shardData = shardData;
  }
}

export { HandshakeData, HandshakeResponseData };
