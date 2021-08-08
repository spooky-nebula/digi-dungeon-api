import { roll, RollRequestData } from '../util/dicerolling';
import * as ddapi from '../index';
import { CreateElementRequest } from '../auth/homebrewdata';
import Class from '../sheets/fifthEdition/class';

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
  } catch (error) {
    console.error('Sheet creation failed successfully');
  }

  let homebrewRequestPreTest: CreateElementRequest<Class> = {
    token: '1b5d8169782cea1bcef71531f4f0be0162379dbd86771c63f0c4778a6be6f535',
    brewID: {
      id: 'f1478da3c21d4774a36af1378f298f52e8c15ec9a893b3d625eec790f1d401b3',
      version: 'Server',
      local_id: null
    },
    newElementData: {
      id: '__paladin',
      basic: {
        name: 'Paladin',
        description: 'Knight of the Light'
      },
      classFeatures: []
    }
  };

  let homebrewRequestAny: any = homebrewRequestPreTest;

  let homebrewRequestClass: CreateElementRequest<Class> = homebrewRequestAny;

  if (
    homebrewRequestClass.newElementData.basic.name !=
    homebrewRequestPreTest.newElementData.basic.name
  ) {
    console.error("Request doesn't match the original, something went wrong.");
  }

  console.log('Tests successful');
}

Test();
