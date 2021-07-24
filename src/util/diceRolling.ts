import crypto from 'crypto';

export class RollRequestData {
  dieQuantity: number;
  modifier: number;
  dieType: number;

  constructor() {
    this.dieType = 20;
    this.dieQuantity = 1;
    this.modifier = 0;
  }
}

export class RollData extends RollRequestData {
  rolls: number[];
  result: number;

  constructor() {
    super();
    this.rolls = [];
    this.result = 0;
  }
}

export function roll(rollRequest: RollRequestData): Promise<RollData> {
  return new Promise((resolve, reject) => {
    if (rollRequest.dieQuantity > 69) {
      console.log('too many dice rolled');
      reject();
    }

    let data = new RollData();
    Object.assign(data, rollRequest);

    for (let i = 0; i < rollRequest.dieQuantity; i++) {
      let bytes = crypto.randomBytes(rollRequest.dieQuantity);
      let roll = Math.floor((bytes.readUInt8(i) % rollRequest.dieType) + 1);
      data.rolls.push(roll);
      data.result += roll;
      if (i + 1 == rollRequest.dieQuantity) {
        data.result += rollRequest.modifier;
        resolve(data);
      }
    }
  });
}
