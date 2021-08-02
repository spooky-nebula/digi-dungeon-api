import { SimpleShardData } from '../shard';

interface HandshakeData {
  token: string;
  shardID: string;
}

class HandshakeData {
  constructor(token: string, shardID: string) {
    this.token = token;
    this.shardID = shardID;
  }
}

interface HandshakeResponseData {
  shardData: SimpleShardData;
}

class HandshakeResponseData {
  constructor(shardData: SimpleShardData) {
    this.shardData = shardData;
  }
}

export { HandshakeData, HandshakeResponseData };
