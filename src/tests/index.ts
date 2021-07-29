import { roll, RollRequestData } from '../util/dicerolling';
import * as ddapi from '../index';

export default function Test() {
  let diceRequest: RollRequestData = {
    dieQuantity: 2,
    dieType: 12,
    modifier: 3
  };

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

  try {
    let sheet = new ddapi.E5.Sheet.Sheet();
    console.log(sheet);
  } catch (error) {
    console.error('Sheet creation failed successfully');
  }

  console.log('Tests successful');
}

Test();
