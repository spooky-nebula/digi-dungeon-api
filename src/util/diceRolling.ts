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

    if (rollRequest.dieQuantity == 1) {
      console.log('dice singular');
      let roll = Math.floor(Math.random() * rollRequest.dieType + 1);
      let data = new RollData();
      data.rolls = [roll];
      data.result = roll + rollRequest.modifier;
      resolve(data);
    } else {
      console.log('dice lot');
      let data = new RollData();
      for (let i = 0; i < rollRequest.dieQuantity; i++) {
        let roll = Math.floor(Math.random() * rollRequest.dieType + 1);
        data.rolls.push(roll);
        data.result += roll;
        if (i + 1 == rollRequest.dieQuantity) {
          data.result += rollRequest.modifier;
          resolve(data);
        }
      }
    }
  });
}
