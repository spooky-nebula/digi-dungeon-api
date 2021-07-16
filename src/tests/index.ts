import { roll, RollRequestData } from '../util/diceRolling';
import * as ddapi from '../index';

export default function Test() {
  let diceRequest = new RollRequestData();

  diceRequest.dieQuantity = 2;
  diceRequest.dieType = 12;
  diceRequest.modifier = 3;

  let diceRollResult = roll(diceRequest);

  diceRollResult.then((result) => {
    if (
      diceRequest.dieQuantity != result.dieQuantity ||
      diceRequest.dieType != result.dieType ||
      diceRequest.modifier != result.modifier
    ) {
      console.error('Dice Rolling failed miserably');
    }
  });

  console.log('Tests successful');
}

Test();
