import { roll } from '../util/dicerolling';
import { RollRequestData } from '../util/dicerolling';
import * as ddapi from '../index';
import { CreateElementRequest } from '../auth/homebrewdata';
import Class from '../sheets/fifthEdition/class';

export function diceRollTest(): TestResult {
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
      return {
        success: false,
        message: '\ndiceRollTest\n Dice Rolling failed miserably'
      };
    }
  });

  return { success: true };
}

export function sheetCreateTest(): TestResult {
  try {
    let sheet = new ddapi.E5.Sheet.Sheet();
  } catch (error) {
    return {
      success: false,
      message: '\nsheetCreateTest\n Sheet creation failed successfully'
    };
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
    return {
      success: false,
      message:
        "\nsheetCreateTest\n Request doesn't match the original, something went wrong."
    };
  }
  return { success: true };
}
